import { IServer } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, OneToMany, ManyToMany, Collection, ManyToOne } from '@mikro-orm/core';
import { Application } from './application.entity';
import { Fqdn } from './fqdn.entity';
import { OperatingSystem } from './operatingSystem.entity';
import { ServerLocation } from './serverLocation.entity';
import { ServerType } from './serverType.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendServer extends Omit<IServer, 'applications' | 'fqdns' | 'types'> {
  applications: Collection<Application>;
  fqdns: Collection<Fqdn>;
  types: Collection<ServerType>;
}

@Entity()
export class Server extends BaseEntity<Server, 'id'> implements IBackendServer {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  ip?: string;

  @ManyToOne()
  os?: OperatingSystem;

  @ManyToMany(() => ServerType, (type) => type.servers, { owner: true })
  types = new Collection<ServerType>(this);

  @ManyToOne()
  location?: ServerLocation;

  @ManyToMany(() => Application, (application) => application.servers)
  applications = new Collection<Application>(this);

  @OneToMany(() => Fqdn, (fqdn) => fqdn.server)
  fqdns = new Collection<Fqdn>(this);

  @Property({ columnType: 'text' })
  notes?: string;
}
