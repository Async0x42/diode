import { IContact } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, Collection, ManyToMany } from '@mikro-orm/core';
import { ContactGroup } from './contactGroup.entity';

// Quick fix to make @mikro-orm collection compat with the common interface
export interface IBackendContact extends Omit<IContact, 'contactGroups'> {
  contactGroups: Collection<ContactGroup>;
}

@Entity()
export class Contact extends BaseEntity<Contact, 'id'> implements IBackendContact {
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

  @ManyToMany(() => ContactGroup, (contactGroup) => contactGroup.contacts)
  contactGroups = new Collection<ContactGroup>(this);

  @Property({ onCreate: () => new Date() })
  createdOn!: Date;

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn!: Date;
}
