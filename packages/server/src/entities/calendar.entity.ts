import { ICalendar } from '@diode/common';
import { Entity, Property } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';

@Entity()
export class Calendar extends DiodeEntity<Calendar> implements ICalendar {
  @Property()
  name!: string;
}
