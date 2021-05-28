import { IApplication } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, OneToMany, ManyToOne, Collection } from '@mikro-orm/core';
import { Dns } from './dns.entity';
import { Server } from './server.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendApplication extends Omit<IApplication, 'dns' | 'server'> {
  dns?: Collection<Dns>;
  server?: Server;
}

@Entity()
export class Application extends BaseEntity<Application, 'id'> implements IBackendApplication {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  shortName?: string;

  @Property()
  description?: string;

  @OneToMany(() => Dns, (dns) => dns.application)
  dns = new Collection<Dns>(this);

  @ManyToOne()
  server?: Server;
}
