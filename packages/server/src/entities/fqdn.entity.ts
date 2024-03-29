import { IFqdn } from '@diode/common';
import { Entity, Property, ManyToOne, ManyToMany } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Application } from './application.entity';
import { Server } from './server.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendFqdn extends Omit<IFqdn, 'server' | 'applications'> {
  server?: Server;
  applications?: Application;
}

@Entity()
export class Fqdn extends DiodeEntity<Fqdn> implements IBackendFqdn {
  @Property()
  name!: string;

  @ManyToOne()
  server?: Server;

  @ManyToMany(() => Application, (application) => application.fqdns)
  applications?: Application;
}
