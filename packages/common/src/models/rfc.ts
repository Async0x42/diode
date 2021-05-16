import { Model, Optional } from 'sequelize';

export type RfcPurpose = 'Sustain' | 'Evolve' | 'Transform';
export type RfcClass = 'Class 1' | 'Class 2' | 'Class 3' | 'Draft';

// We recommend you declare an interface for the attributes, for stricter typechecking
export interface RfcAttributes {
  id: number;
  title: string;
  class: RfcClass;
  purpose: RfcPurpose;
  description?: string;
  parentSystem?: string;
  businessCase?: string;
  securityImplications?: string;
  affectedInfrastructure?: string;
  affectedInformationSystem?: string;
  conceptOfOperation?: string;
  conceptOfTesting?: string;
  conceptofImplementation?: string;
  backoutPlan?: string;
  impactAssessmentDueDate?: Date;
}

// Some fields are optional when calling RfcModel.create() or RfcModel.build()
export interface RfcCreationAttributes extends Optional<RfcAttributes, 'id'> {}

// We need to declare an interface for our model that is basically what our class would be
export interface RfcInstance extends Model<RfcAttributes, RfcCreationAttributes>, RfcAttributes {}

export class Rfc extends Model<RfcAttributes, RfcCreationAttributes> implements RfcAttributes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public title!: string;
  public class!: RfcClass;
  public purpose!: RfcPurpose;
  public description?: string;
  public parentSystem?: string;
  public businessCase?: string;
  public securityImplications?: string;
  public affectedInfrastructure?: string;
  public affectedInformationSystem?: string;
  public conceptOfOperation?: string;
  public conceptOfTesting?: string;
  public conceptofImplementation?: string;
  public backoutPlan?: string;
  public impactAssessmentDueDate?: Date;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
