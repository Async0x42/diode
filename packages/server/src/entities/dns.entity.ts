import { IDns } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, ManyToOne, ManyToMany } from '@mikro-orm/core';
import { Application } from './application.entity';
import { Server } from './server.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendDns extends Omit<IDns, 'server' | 'applications'> {
  server?: Server;
  applications?: Application;
}

@Entity()
export class Dns extends BaseEntity<Dns, 'id'> implements IBackendDns {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @ManyToOne()
  server?: Server;

  @ManyToMany()
  applications?: Application;
}
