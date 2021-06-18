import { ITicket, TicketStatus } from '@diode/common';
import { Entity, Property, ManyToMany, Collection } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Application } from './application.entity';
import { Contact } from './contact.entity';
import { Server } from './server.entity';

// Quick fix to make @mikro-orm collection compat with the ITicket []
export interface IBackendTicket extends Omit<ITicket, 'applications' | 'servers' | 'owners'> {
  applications: Collection<Application>;
  servers: Collection<Server>;
  owners: Collection<Contact>;
}

@Entity()
export class Ticket extends DiodeEntity<Ticket> implements IBackendTicket {
  @Property()
  name!: string;

  @Property({ columnType: 'text' })
  details?: string;

  @ManyToMany(() => Application, (application) => application.tickets, { owner: true })
  applications = new Collection<Application>(this);

  @ManyToMany(() => Server, (server) => server.tickets, { owner: true })
  servers = new Collection<Server>(this);

  @ManyToMany(() => Contact, (contact) => contact.tickets, { owner: true })
  owners = new Collection<Contact>(this);

  @Property()
  startDate?: Date;

  @Property()
  endDate?: Date;

  @Property()
  status?: TicketStatus;
}
