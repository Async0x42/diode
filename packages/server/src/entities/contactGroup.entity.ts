import { IContactGroup } from '@diode/common';
import { Entity, Property, Collection, ManyToMany } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Contact } from './contact.entity';

// Quick fix to make @mikro-orm collection compat with the common interface
export interface IBackendContactGroup extends Omit<IContactGroup, 'contacts'> {
  contacts: Collection<Contact>;
}

@Entity()
export class ContactGroup extends DiodeEntity<ContactGroup> implements IBackendContactGroup {
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
