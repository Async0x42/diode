import { IServerType } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, ManyToMany, Collection, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Server } from './server.entity';

@Entity()
export class ServerType extends BaseEntity<ServerType, 'id'> implements IServerType {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string; // won't be saved in the database

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
