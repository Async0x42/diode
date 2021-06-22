import { IDiodeEntity } from './diodeEntity';
import { IContactGroup } from './contactGroup';
import { IWorkOrder } from './workOrder';

export interface IContact extends IDiodeEntity {
  name: string;
  phone?: string;
  email?: string;
  title?: string;
  organization?: string;
  department?: string;
  notes?: string;
  contactGroups: IContactGroup[];
  workOrders: IWorkOrder[];
}
