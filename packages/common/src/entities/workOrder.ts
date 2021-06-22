import { IApplication } from './application';
import { IContact } from './contact';
import { IServer } from './server';

export type WorkOrderStatus = 'New' | 'In progress' | 'Waiting on others' | 'Backlog' | 'Done' | 'Cancelled';

export interface IWorkOrder {
  id: number;
  name: string;
  details?: string;
  applications: IApplication[];
  servers: IServer[];
  startDate?: Date;
  endDate?: Date;
  status?: WorkOrderStatus;
  owners: IContact[];
  createdOn: Date;
  modifiedOn: Date;
}
