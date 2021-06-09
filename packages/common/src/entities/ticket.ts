import { IApplication } from './application';
import { IContact } from './contact';
import { IServer } from './server';

export type TicketStatus = 'New' | 'In progress' | 'Waiting on others' | 'Backlog' | 'Done' | 'Cancelled';

export interface ITicket {
  id: number;
  name: string;
  details?: string;
  applications: IApplication[];
  servers: IServer[];
  startDate?: Date;
  endDate?: Date;
  status?: TicketStatus;
  owners: IContact[];
  createdOn: Date;
  modifiedOn: Date;
}
