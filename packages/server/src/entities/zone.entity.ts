import { IZone } from '@diode/common';
import { Property, MaxLength, Required } from "@tsed/schema";
import { Entity, Property as Column, ManyToMany, Collection, OneToMany, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';

@Entity()
export class Zone extends DiodeEntity<Zone> implements IZone {
  @Column()
  @Required()
  name!: string;

  @Column()
  shortName?: string;
}
