import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Calendar extends BaseEntity<Calendar, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;
}
