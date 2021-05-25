export type RfcPurpose = 'Sustain' | 'Evolve' | 'Transform';
export type RfcClass = 'Class 1' | 'Class 2' | 'Class 3' | 'Draft';

export interface IRfc {
  id: number;
  rfcNumber?: number;
  title: string;
  rfcClass: RfcClass;
  purpose: RfcPurpose;
  description?: string;
  parentSystem?: string;
  businessCase?: string;
  securityImplications?: string;
  affectedInfrastructure?: string;
  affectedConfigurationItems?: string;
  affectedInformationSystem?: string;
  conceptOfOperation?: string;
  conceptOfTesting?: string;
  conceptOfImplementation?: string;
  backoutPlan?: string;
  impactAssessmentDueDate?: Date;
}
