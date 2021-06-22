import { IApplication } from '@diode/common';
import { Entity, Property, ManyToMany, Collection, OneToMany } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Brd } from './brd.entity';
import { Fqdn } from './fqdn.entity';
import { Rfc } from './rfc.entity';
import { Server } from './server.entity';
import { SslCertificate } from './sslCertificate.entity';
import { WorkOrder } from './workOrder.entity';
import { Ticket } from './ticket.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendApplication
  extends Omit<IApplication, 'fqdns' | 'servers' | 'brds' | 'rfcs' | 'sslCertificates' | 'workOrders' | 'tickets'> {
  fqdns: Collection<Fqdn>;
  servers: Collection<Server>;
  brds: Collection<Brd>;
  rfcs: Collection<Rfc>;
  sslCertificates: Collection<SslCertificate>;
  workOrders: Collection<WorkOrder>;
  tickets: Collection<Ticket>;
}

@Entity()
export class Application extends DiodeEntity<Application> implements IBackendApplication {
  @Property()
  name!: string;

  @Property()
  shortName?: string;

  @Property({ columnType: 'text' })
  description?: string;

  @ManyToMany(() => Fqdn, (fqdn) => fqdn.applications, { owner: true })
  fqdns = new Collection<Fqdn>(this);

  @ManyToMany(() => Server, (server) => server.applications, { owner: true })
  servers = new Collection<Server>(this);

  @ManyToMany(() => SslCertificate, (sslCert) => sslCert.applications, { owner: true })
  sslCertificates = new Collection<SslCertificate>(this);

  @ManyToMany(() => WorkOrder, (workOrder) => workOrder.applications)
  workOrders = new Collection<WorkOrder>(this);

  @OneToMany(() => Brd, (brd) => brd.application)
  brds = new Collection<Brd>(this);

  @OneToMany(() => Rfc, (rfc) => rfc.application)
  rfcs = new Collection<Rfc>(this);

  @ManyToMany(() => Ticket, (ticket) => ticket.applications)
  tickets = new Collection<Ticket>(this);
}
