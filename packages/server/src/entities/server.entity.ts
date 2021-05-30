import { IServer, OperatingSystem, ServerType } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, OneToMany, ManyToMany, Collection } from '@mikro-orm/core';
import { Application } from './application.entity';
import { Fqdn } from './fqdn.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendServer extends Omit<IServer, 'applications' | 'fqdns'> {
  applications: Collection<Application>;
  fqdns: Collection<Fqdn>;
}

@Entity()
export class Server extends BaseEntity<Server, 'id'> implements IBackendServer {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  ip?: string;

  @Property()
  os?: OperatingSystem;

  @Property()
  type?: ServerType[];

  @ManyToMany(() => Application, (application) => application.servers)
  applications = new Collection<Application>(this);

  @OneToMany(() => Fqdn, (fqdn) => fqdn.server)
  fqdns = new Collection<Fqdn>(this);

  @Property({ columnType: 'text' })
  notes?: string;
}
