import { IServerLocation } from '@diode/common';
import { Entity, Property, OneToMany, Collection } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Server } from './server.entity';

@Entity()
export class ServerLocation extends DiodeEntity<ServerLocation> implements IServerLocation {
  @Property()
  name!: string;

  @Property()
  shortName?: string;

  @OneToMany(() => Server, (server) => server.location)
  servers = new Collection<Server>(this);
}
