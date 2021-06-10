import { IServerLocation } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, OneToMany, Collection, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Server } from './server.entity';

@Entity()
export class ServerLocation extends BaseEntity<ServerLocation, 'id'> implements IServerLocation {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string; // won't be saved in the database

  @Property()
  name!: string;

  @Property()
  shortName?: string;

  @OneToMany(() => Server, (server) => server.location)
  servers = new Collection<Server>(this);

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
