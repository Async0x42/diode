import { IServerLocation } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, OneToMany, Collection } from '@mikro-orm/core';
import { Server } from './server.entity';

@Entity()
export class ServerLocation extends BaseEntity<ServerLocation, 'id'> implements IServerLocation {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  shortName?: string;

  @OneToMany(() => Server, (server) => server.location)
  servers = new Collection<Server>(this);

  @Property({ onCreate: () => new Date() })
  createdOn!: Date;

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn!: Date;
}
