import { IContact } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Contact extends BaseEntity<Contact, 'id'> implements IContact {
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
}
