import { ICalendarItem } from '@daiod/common';
import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class CalendarItem extends BaseEntity<CalendarItem, 'id'> implements ICalendarItem {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  category?: string;

  @Property()
  description?: string;

  @Property()
  imageUrl?: string;

  @Property()
  start!: Date;

  @Property()
  end!: Date;

  @Property()
  allDay = false;
}
