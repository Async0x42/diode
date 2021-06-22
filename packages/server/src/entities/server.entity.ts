import { IServer } from '@diode/common';
import { Entity, Property, OneToMany, ManyToMany, Collection, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Application } from './application.entity';
import { Environment } from './environment.entity';
import { Fqdn } from './fqdn.entity';
import { Network } from './network.entity';
import { OperatingSystem } from './operatingSystem.entity';
import { PhysicalServer } from './physicalServer.entity';
import { ServerLocation } from './serverLocation.entity';
import { ServerType } from './serverType.entity';
import { SslCertificate } from './sslCertificate.entity';
import { WorkOrder } from './workOrder.entity';
import { Zone } from './zone.entity';
import { Ticket } from './ticket.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendServer
  extends Omit<IServer, 'applications' | 'fqdns' | 'types' | 'physicalServer' | 'sslCertificates' | 'workOrders' | 'tickets'> {
  applications: Collection<Application>;
  fqdns: Collection<Fqdn>;
  types: Collection<ServerType>;
  physicalServer?: PhysicalServer;
  sslCertificates: Collection<SslCertificate>;
  workOrders: Collection<WorkOrder>;
  tickets: Collection<Ticket>;
}

@Entity()
export class Server extends DiodeEntity<Server> implements IBackendServer {
  @Property()
  name!: string;

  @Property()
  ip?: string;

  @ManyToOne()
  environment?: Environment;

  @ManyToOne()
  network?: Network;

  @ManyToOne()
  zone?: Zone;

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

  @ManyToMany(() => WorkOrder, (workOrder) => workOrder.servers)
  workOrders = new Collection<WorkOrder>(this);

  @OneToMany(() => Fqdn, (fqdn) => fqdn.server)
  fqdns = new Collection<Fqdn>(this);

  @ManyToOne()
  physicalServer?: PhysicalServer;

  @Property({ columnType: 'text' })
  notes?: string;

  @ManyToMany(() => Ticket, (ticket) => ticket.servers)
  tickets = new Collection<Ticket>(this);
}
