import { ICalendar } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Calendar extends BaseEntity<Calendar, 'id'> implements ICalendar {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
