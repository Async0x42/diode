import { IRfc, RfcClass, RfcPurpose, RfcStatus } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Rfc extends BaseEntity<Rfc, 'id'> implements IRfc {
  @PrimaryKey()
  id!: number;

  @Property()
  rfcNumber?: number;

  @Property()
  title!: string;

  @Property()
  rfcClass!: RfcClass;

  @Property()
  purpose!: RfcPurpose;

  @Property()
  status!: RfcStatus;

  @Property()
  description?: string;

  @Property()
  parentSystem?: string;

  @Property()
  businessCase?: string;

  @Property()
  securityImplications?: string;

  @Property()
  affectedInfrastructure?: string;

  @Property()
  affectedConfigurationItems?: string;

  @Property()
  affectedInformationSystem?: string;

  @Property()
  conceptOfOperation?: string;

  @Property()
  conceptOfTesting?: string;

  @Property()
  conceptOfImplementation?: string;

  @Property()
  backoutPlan?: string;

  @Property()
  impactAssessmentDueDate?: Date;
}
