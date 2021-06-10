import { IContact } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, Collection, ManyToMany, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { ContactGroup } from './contactGroup.entity';
import { Ticket } from './ticket.entity';

// Quick fix to make @mikro-orm collection compat with the common interface
export interface IBackendContact extends Omit<IContact, 'contactGroups' | 'tickets'> {
  contactGroups: Collection<ContactGroup>;
  tickets: Collection<Ticket>;
}

@Entity()
export class Contact extends BaseEntity<Contact, 'id'> implements IBackendContact {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string; // won't be saved in the database

  @Property()
  name!: string;

  @Property()
  phone?: string;

  @Property()
  email?: string;

  @Property()
  title?: string;

  @Property()
  organization?: string;

  @Property()
  department?: string;

  @Property({ columnType: 'text' })
  notes?: string;

  @ManyToMany(() => ContactGroup, (contactGroup) => contactGroup.contacts)
  contactGroups = new Collection<ContactGroup>(this);

  @ManyToMany(() => Ticket, (ticket) => ticket.owners)
  tickets = new Collection<Ticket>(this);

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
