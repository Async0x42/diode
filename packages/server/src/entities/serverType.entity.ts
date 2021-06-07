import { IServerType } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, ManyToMany, Collection } from '@mikro-orm/core';
import { Server } from './server.entity';

@Entity()
export class ServerType extends BaseEntity<ServerType, 'id'> implements IServerType {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  shortName?: string;

  @ManyToMany(() => Server, (server) => server.types)
  servers = new Collection<Server>(this);

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
