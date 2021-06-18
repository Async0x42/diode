import { IZone } from '@diode/common';
import { Entity, Property } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';

@Entity()
export class Zone extends DiodeEntity<Zone> implements IZone {
  @Property()
  name!: string;

  @Property()
  shortName?: string;
}
