import { IDns } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, ManyToOne } from '@mikro-orm/core';
import { Server } from './server.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendDns extends Omit<IDns, 'server'> {
  server?: Server;
}

@Entity()
export class Dns extends BaseEntity<Dns, 'id'> implements IBackendDns {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @ManyToOne()
  server?: Server;
}
