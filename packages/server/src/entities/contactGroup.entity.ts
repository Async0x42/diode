import { IContactGroup } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, Collection, ManyToMany, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Contact } from './contact.entity';

// Quick fix to make @mikro-orm collection compat with the common interface
export interface IBackendContactGroup extends Omit<IContactGroup, 'contacts'> {
  contacts: Collection<Contact>;
}

@Entity()
export class ContactGroup extends BaseEntity<ContactGroup, 'id'> implements IBackendContactGroup {
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

  @ManyToMany(() => Contact, (contact) => contact.contactGroups, { owner: true })
  contacts = new Collection<Contact>(this);

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
