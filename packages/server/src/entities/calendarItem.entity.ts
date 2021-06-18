import { ICalendarItem } from '@diode/common';
import { Entity, Property } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';

@Entity()
export class CalendarItem extends DiodeEntity<CalendarItem> implements ICalendarItem {
  @Property()
  title!: string;

  @Property()
  category?: string;

  @Property({ columnType: 'text' })
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
