import { IEnvironment } from '@diode/common';
import { Entity, Property } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';

@Entity()
export class Environment extends DiodeEntity<Environment> implements IEnvironment {
  @Property()
  name!: string;

  @Property()
  shortName?: string;
}
