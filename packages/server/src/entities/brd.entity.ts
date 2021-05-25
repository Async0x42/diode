import { BrdStatus, IBrd } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Brd extends BaseEntity<Brd, 'id'> implements IBrd {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  description!: string;

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
}
