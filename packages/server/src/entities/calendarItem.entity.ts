import { ICalendarItem } from '@diode/common';
import { Property, MaxLength, Required } from "@tsed/schema";
import { Entity, Property as Column, ManyToMany, Collection, OneToMany, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';

@Entity()
export class CalendarItem extends DiodeEntity<CalendarItem> implements ICalendarItem {
  @Column()
  @Required()
  title!: string;

  @Column()
  category?: string;

  @Column({ columnType: 'text' })
  description?: string;

  @Column()
  imageUrl?: string;

  @Column()
  @Required()
  start!: Date;

  @Column()
  @Required()
  end!: Date;

  @Column()
  allDay = false;
}
