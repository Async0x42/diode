import { IContactGroup } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, Collection, ManyToMany } from '@mikro-orm/core';
import { Contact } from './contact.entity';

// Quick fix to make @mikro-orm collection compat with the common interface
export interface IBackendContactGroup extends Omit<IContactGroup, 'contacts'> {
  contacts: Collection<Contact>;
}

@Entity()
export class ContactGroup extends BaseEntity<ContactGroup, 'id'> implements IBackendContactGroup {
  @PrimaryKey()
  id!: number;

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
}
