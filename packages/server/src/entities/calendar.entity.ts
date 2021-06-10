import { ICalendar } from '@diode/common';
import { SerializedPrimaryKey, BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

import { ObjectId } from '@mikro-orm/mongodb';

@Entity()
export class Calendar extends BaseEntity<Calendar, 'id'> implements ICalendar {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string; // won't be saved in the database

  @Property()
  name!: string;

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
