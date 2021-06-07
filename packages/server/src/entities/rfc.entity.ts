import { IRfc, RfcClass, RfcPurpose, RfcStatus } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, ManyToOne } from '@mikro-orm/core';
import { Application } from './application.entity';

// Quick fix to make @mikro-orm collection compat with the common interface
export interface IBackendRfc extends Omit<IRfc, 'application'> {
  application?: Application;
}

@Entity()
export class Rfc extends BaseEntity<Rfc, 'id'> implements IBackendRfc {
  @PrimaryKey()
  id!: number;

  @Property()
  rfcNumber?: number;

  @Property()
  title!: string;

  @ManyToOne()
  application?: Application;

  @Property()
  rfcClass!: RfcClass;

  @Property()
  purpose!: RfcPurpose;

  @Property()
  status!: RfcStatus;

  @Property({ columnType: 'text' })
  description?: string;

  @Property({ columnType: 'text' })
  parentSystem?: string;

  @Property({ columnType: 'text' })
  businessCase?: string;

  @Property()
  securityImplications?: string;

  @Property({ columnType: 'text' })
  affectedInfrastructure?: string;

  @Property({ columnType: 'text' })
  affectedConfigurationItems?: string;

  @Property({ columnType: 'text' })
  affectedInformationSystem?: string;

  @Property({ columnType: 'text' })
  conceptOfOperation?: string;

  @Property({ columnType: 'text' })
  conceptOfTesting?: string;

  @Property({ columnType: 'text' })
  conceptOfImplementation?: string;

  @Property({ columnType: 'text' })
  backoutPlan?: string;

  @Property()
  impactAssessmentDueDate?: Date;

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
