import { ITicket, TicketStatus } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, ManyToMany, Collection, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
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
export class Ticket extends BaseEntity<Ticket, 'id'> implements IBackendTicket {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string; // won't be saved in the database

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

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
