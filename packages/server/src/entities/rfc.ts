import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

export type RfcPurpose = 'Sustain' | 'Evolve' | 'Transform';
export type RfcClass = 'Class 1' | 'Class 2' | 'Class 3' | 'Draft';

@Entity()
export class Rfc extends BaseEntity<Rfc, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  class!: RfcClass;

  @Property()
  purpose!: RfcPurpose;

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
  affectedInformationSystem?: string;

  @Property()
  conceptOfOperation?: string;

  @Property()
  conceptOfTesting?: string;

  @Property()
  conceptofImplementation?: string;

  @Property()
  backoutPlan?: string;

  @Property()
  impactAssessmentDueDate?: Date;
}
