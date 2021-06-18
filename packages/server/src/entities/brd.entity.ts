import { BrdStatus, IBrd } from '@diode/common';
import { Entity, Property, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Application } from './application.entity';

// Quick fix to make @mikro-orm collection compat with the common interface
export interface IBackendBrd extends Omit<IBrd, 'application' | 'submissionDate' | 'dateEnteredIntoBits'> {
  application?: Application;
  submissionDate?: Date;
  dateEnteredIntoBits?: Date;
}

@Entity()
export class Brd extends DiodeEntity<Brd> implements IBackendBrd {
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
}
