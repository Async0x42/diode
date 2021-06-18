import { IServerType } from '@diode/common';
import { Entity, Property, ManyToMany, Collection } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Server } from './server.entity';

@Entity()
export class ServerType extends DiodeEntity<ServerType> implements IServerType {
  @Property()
  name!: string;

  @Property()
  shortName?: string;

  @ManyToMany(() => Server, (server) => server.types)
  servers = new Collection<Server>(this);
}
