import { ICalendarItem } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, SerializedPrimaryKey } from '@mikro-orm/core';

import { ObjectId } from '@mikro-orm/mongodb';

@Entity()
export class CalendarItem extends BaseEntity<CalendarItem, 'id'> implements ICalendarItem {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string; // won't be saved in the database

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
