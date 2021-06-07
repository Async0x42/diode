import { BrdStatus, IBrd } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, ManyToOne } from '@mikro-orm/core';
import { Application } from './application.entity';

// Quick fix to make @mikro-orm collection compat with the common interface
export interface IBackendBrd extends Omit<IBrd, 'application'> {
  application?: Application;
}

@Entity()
export class Brd extends BaseEntity<Brd, 'id'> implements IBackendBrd {
  @PrimaryKey()
  id!: number;

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
