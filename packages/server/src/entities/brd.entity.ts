import { BrdStatus, IBrd } from '@diode/common';
import { Property, MaxLength, Required } from "@tsed/schema";
import { Entity, Property as Column, ManyToMany, Collection, OneToMany, ManyToOne } from '@mikro-orm/core';
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
  @Column()
  @Required()
  title!: string;

  @Column({ columnType: 'text' })
  description?: string;

  @Column()
  relatedRequests?: string;

  @Column()
  brdNumber?: number;

  @Column()
  priority?: number;

  @Column()
  status?: BrdStatus;

  @Column()
  submissionDate?: Date;

  @Column()
  dateEnteredIntoBits?: Date;

  @Column()
  initialCost?: number;

  @Column()
  upkeepCost?: number;

  @ManyToOne()
  application?: Application;
}
