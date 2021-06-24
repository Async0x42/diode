import { IOperatingSystem } from '@diode/common';
import { Entity, Property, OneToMany, Collection } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Server } from './server.entity';

@Entity()
export class OperatingSystem extends DiodeEntity<OperatingSystem> implements IOperatingSystem {
  @Property()
  name!: string;

  @Property()
  shortName?: string;

  @Property()
  endOfSupportDate?: Date;

  @OneToMany(() => Server, (server) => server.operatingSystem)
  servers = new Collection<Server>(this);
}
