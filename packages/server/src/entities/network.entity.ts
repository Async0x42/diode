import { INetwork } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, SerializedPrimaryKey } from '@mikro-orm/core';

import { ObjectId } from '@mikro-orm/mongodb';

@Entity()
export class Network extends BaseEntity<Network, 'id'> implements INetwork {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string; // won't be saved in the database

  @Property()
  name!: string;

  @Property()
  shortName?: string;

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
