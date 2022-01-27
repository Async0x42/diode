import { IRfc, RfcClass, RfcPurpose, RfcStatus } from '@diode/common';
import { Property, MaxLength, Required } from "@tsed/schema";
import { Entity, Property as Column, ManyToMany, Collection, OneToMany, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Application } from './application.entity';

// Quick fix to make @mikro-orm collection compat with the common interface
export interface IBackendRfc extends Omit<IRfc, 'application'> {
  application?: Application;
}

@Entity()
export class Rfc extends DiodeEntity<Rfc> implements IBackendRfc {
  @Column()
  rfcNumber?: number;

  @Column()
  @Required()
  title!: string;

  @ManyToOne()
  application?: Application;

  @Column()
  @Required()
  rfcClass!: RfcClass;

  @Column()
  @Required()
  purpose!: RfcPurpose;

  @Column()
  @Required()
  status!: RfcStatus;

  @Column({ columnType: 'text' })
  description?: string;

  @Column({ columnType: 'text' })
  parentSystem?: string;

  @Column({ columnType: 'text' })
  businessCase?: string;

  @Column()
  securityImplications?: string;

  @Column({ columnType: 'text' })
  affectedInfrastructure?: string;

  @Column({ columnType: 'text' })
  affectedConfigurationItems?: string;

  @Column({ columnType: 'text' })
  affectedInformationSystem?: string;

  @Column({ columnType: 'text' })
  conceptOfOperation?: string;

  @Column({ columnType: 'text' })
  conceptOfTesting?: string;

  @Column({ columnType: 'text' })
  conceptOfImplementation?: string;

  @Column({ columnType: 'text' })
  backoutPlan?: string;

  @Column()
  impactAssessmentDueDate?: Date;
}
