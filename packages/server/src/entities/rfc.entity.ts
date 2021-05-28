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
}
