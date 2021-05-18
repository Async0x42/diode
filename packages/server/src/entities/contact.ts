import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Contact extends BaseEntity<Contact, 'id'> {
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

  @Property()
  notes?: string;

  @Property()
  createdAt = new Date();

  @Property()
  updatedAt = new Date();

  // TODO: is needed?
  constructor(name: string) {
    super();
    this.name = name;
  }
}
