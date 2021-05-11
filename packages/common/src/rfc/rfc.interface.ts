export interface BaseRFC {
  name: string;
  class: string;
  purpose: 'Sustain' | 'Evolve' | 'Transform';
  title: string;
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

export interface RFC extends BaseRFC {
  id: string;
}
