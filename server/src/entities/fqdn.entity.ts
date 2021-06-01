import { IFqdn } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, ManyToOne, ManyToMany } from '@mikro-orm/core';
import { Application } from './application.entity';
import { Server } from './server.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendFqdn extends Omit<IFqdn, 'server' | 'applications'> {
  server?: Server;
  applications?: Application;
}

@Entity()
export class Fqdn extends BaseEntity<Fqdn, 'id'> implements IBackendFqdn {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @ManyToOne()
  server?: Server;

  @ManyToMany(() => Application, (application) => application.fqdns)
  applications?: Application;
}
