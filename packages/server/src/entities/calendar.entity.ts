import { ICalendar } from '@diode/common';
import { Property, MaxLength, Required } from "@tsed/schema";
import { Entity, Property as Column, ManyToMany, Collection, OneToMany, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';

@Entity()
export class Calendar extends DiodeEntity<Calendar> implements ICalendar {
  @Column()
  @Required()
  name!: string;
}
