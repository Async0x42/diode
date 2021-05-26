import { IServer } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, OneToMany, Collection } from '@mikro-orm/core';
import { Application } from './application.entity';
import { Dns } from './dns.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendServer extends Omit<IServer, 'applications' | 'dns'> {
  applications: Collection<Application>;
  dns: Collection<Dns>;
}

@Entity()
export class Server extends BaseEntity<Server, 'id'> implements IBackendServer {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  ip?: string;

  @OneToMany(() => Application, (application) => application.server)
  applications = new Collection<Application>(this);

  @OneToMany(() => Application, (dns) => dns.server)
  dns = new Collection<Dns>(this);
}
