import { IOperatingSystem } from '@diode/common';
import { Property, MaxLength, Required } from "@tsed/schema";
import { Entity, Property as Column, ManyToMany, Collection, OneToMany, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Server } from './server.entity';

@Entity()
export class OperatingSystem extends DiodeEntity<OperatingSystem> implements IOperatingSystem {
  @Column()
  @Required()
  name!: string;

  @Column()
  shortName?: string;

  @Column()
  endOfSupportDate?: Date;

  @OneToMany(() => Server, (server) => server.operatingSystem)
  servers = new Collection<Server>(this);
}
