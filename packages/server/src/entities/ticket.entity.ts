import { ITicket, TicketStatus } from '@diode/common';
import { Entity, Property, ManyToMany, Collection } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Application } from './application.entity';
import { Server } from './server.entity';

// Quick fix to make @mikro-orm collection compat with the ITicket []
export interface IBackendTicket extends Omit<ITicket, 'applications' | 'servers'> {
  applications: Collection<Application>;
  servers: Collection<Server>;
}

@Entity()
export class Ticket extends DiodeEntity<Ticket> implements IBackendTicket {
  @Property()
  name!: string;

  @Property()
  ticketId!: string;

  @Property({ columnType: 'text' })
  details?: string;

  @Property()
  status?: TicketStatus;

  @ManyToMany(() => Application, (application) => application.tickets, { owner: true })
  applications = new Collection<Application>(this);

  @ManyToMany(() => Server, (server) => server.tickets, { owner: true })
  servers = new Collection<Server>(this);

  @Property()
  estimatedDueDate?: Date;
}
