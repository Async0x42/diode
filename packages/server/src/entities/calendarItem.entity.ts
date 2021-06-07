import { ICalendarItem } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class CalendarItem extends BaseEntity<CalendarItem, 'id'> implements ICalendarItem {
  @PrimaryKey()
  id!: number;

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

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
