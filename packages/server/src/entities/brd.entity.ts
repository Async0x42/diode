import { BrdStatus, IBrd } from '@diode/common';
import { SerializedPrimaryKey, BaseEntity, Entity, Property, PrimaryKey, ManyToOne } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';

import { Application } from './application.entity';

// Quick fix to make @mikro-orm collection compat with the common interface
export interface IBackendBrd extends Omit<IBrd, 'application'> {
  application?: Application;
}

@Entity()
export class Brd extends BaseEntity<Brd, 'id'> implements IBackendBrd {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string; // won't be saved in the database

  @Property()
  title!: string;

  @Property({ columnType: 'text' })
  description?: string;

  @Property()
  relatedRequests?: string;

  @Property()
  brdNumber?: number;

  @Property()
  priority?: number;

  @Property()
  status?: BrdStatus;

  @Property()
  submissionDate?: Date;

  @Property()
  dateEnteredIntoBits?: Date;

  @Property()
  initialCost?: number;

  @Property()
  upkeepCost?: number;

  @ManyToOne()
  application?: Application;

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
