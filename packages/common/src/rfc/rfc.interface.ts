export type RfcPurpose = 'Sustain' | 'Evolve' | 'Transform';
export type RfcClass = 'Class 1' | 'Class 2' | 'Class 3' | 'Draft';

export interface BaseRfc {
  title: string;
  class: RfcClass;
  purpose: RfcPurpose;
  description: string;
  parentSystem?: string;
  businessCase: string;
  securityImplications?: string;
  affectedInfrastructure: string;
  affectedInformationSystem: string;
  conceptOfOperation: string;
  conceptOfTesting: string;
  conceptofImplementation: string;
  backoutPlan: string;
  impactAssessmentDueDate: Date;
}

export interface Rfc extends BaseRfc {
  id: string;
}
