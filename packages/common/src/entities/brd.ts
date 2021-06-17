import { IApplication } from './application';

export type BrdStatus = 'Draft' | 'Assessment' | 'Design' | 'WIF' | 'SA' | 'Implementation' | 'Done';

export interface IBrd {
  id: number;
  title: string;
  description?: string;
  relatedRequests?: string;
  brdNumber?: number;
  priority?: number;
  status?: BrdStatus;
  submissionDate?: number;
  dateEnteredIntoBits?: number;
  initialCost?: number;
  upkeepCost?: number;
  application?: IApplication;
  createdOn: Date;
  modifiedOn: Date;
}
