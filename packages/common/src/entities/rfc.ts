import { IApplication } from './application';

export type RfcPurpose = 'Sustain' | 'Evolve' | 'Transform';
export type RfcClass = 'Class 1' | 'Class 2' | 'Class 3' | 'Draft';
export type RfcStatus =
  | 'New'
  | 'Open for Impact Analysis'
  | 'Not Approved'
  | 'Deferred'
  | 'Approved'
  | 'Closed'
  | 'Cancelled'
  | 'Returned for Modification'
  | 'Approved Conditionally';

export interface IRfc {
  id: number;
  rfcNumber?: number;
  title: string;
  application?: IApplication;
  rfcClass: RfcClass;
  status: RfcStatus;
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
  createdOn: Date;
  modifiedOn: Date;
}
