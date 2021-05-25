import { ICalendar } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Calendar extends BaseEntity<Calendar, 'id'> implements ICalendar {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;
}