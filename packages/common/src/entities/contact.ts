import { IContactGroup } from './contactGroup';
import { IWorkOrder } from './workOrder';

export interface IContact {
  id: number;
  name: string;
  phone?: string;
  email?: string;
  title?: string;
  organization?: string;
  department?: string;
  notes?: string;
  contactGroups: IContactGroup[];
  workOrders: IWorkOrder[];
  createdOn: Date;
  modifiedOn: Date;
}
