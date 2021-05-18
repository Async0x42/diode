import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Calendar extends BaseEntity<Calendar, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

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
