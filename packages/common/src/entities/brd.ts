import { IApplication } from './application';
import { IDiodeEntity } from './diodeEntity';

export type BrdStatus = 'Draft' | 'Assessment' | 'Design' | 'WIF' | 'SA' | 'Implementation' | 'Done';

export interface IBrd extends IDiodeEntity {
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
}
