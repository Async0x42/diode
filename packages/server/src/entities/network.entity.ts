import { INetwork } from '@diode/common';
import { Entity, Property } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';

@Entity()
export class Network extends DiodeEntity<Network> implements INetwork {
  @Property()
  name!: string;

  @Property()
  shortName?: string;
}
