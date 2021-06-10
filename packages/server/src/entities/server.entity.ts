import { IServer } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, OneToMany, ManyToMany, Collection, ManyToOne, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Application } from './application.entity';
import { Environment } from './environment.entity';
import { Fqdn } from './fqdn.entity';
import { Network } from './network.entity';
import { OperatingSystem } from './operatingSystem.entity';
import { PhysicalServer } from './physicalServer.entity';
import { ServerLocation } from './serverLocation.entity';
import { ServerType } from './serverType.entity';
import { SslCertificate } from './sslCertificate.entity';
import { Ticket } from './ticket.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendServer extends Omit<IServer, 'applications' | 'fqdns' | 'types' | 'physicalServer' | 'sslCertificates' | 'tickets'> {
  applications: Collection<Application>;
  fqdns: Collection<Fqdn>;
  types: Collection<ServerType>;
  physicalServer?: PhysicalServer;
  sslCertificates: Collection<SslCertificate>;
  tickets: Collection<Ticket>;
}

@Entity()
export class Server extends BaseEntity<Server, 'id'> implements IBackendServer {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string; // won't be saved in the database

  @Property()
  name!: string;

  @Property()
  ip?: string;

  @ManyToOne()
  environment?: Environment;

  @ManyToOne()
  network?: Network;

  @ManyToOne()
  operatingSystem?: OperatingSystem;

  @ManyToMany(() => ServerType, (type) => type.servers, { owner: true })
  types = new Collection<ServerType>(this);

  @ManyToOne()
  location?: ServerLocation;

  @ManyToMany(() => Application, (application) => application.servers)
  applications = new Collection<Application>(this);

  @ManyToMany(() => SslCertificate, (sslCert) => sslCert.servers, { owner: true })
  sslCertificates = new Collection<SslCertificate>(this);

  @ManyToMany(() => Ticket, (ticket) => ticket.servers)
  tickets = new Collection<Ticket>(this);

  @OneToMany(() => Fqdn, (fqdn) => fqdn.server)
  fqdns = new Collection<Fqdn>(this);

  @ManyToOne()
  physicalServer?: PhysicalServer;

  @Property({ columnType: 'text' })
  notes?: string;

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
