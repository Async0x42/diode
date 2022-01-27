import { INetwork } from '@diode/common';
import { Property, MaxLength, Required } from "@tsed/schema";
import { Entity, Property as Column, ManyToMany, Collection, OneToMany, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';

@Entity()
export class Network extends DiodeEntity<Network> implements INetwork {
  @Column()
  @Required()
  name!: string;

  @Column()
  shortName?: string;
}
