import { IApplication } from './application';
import { IDiodeEntity } from './diodeEntity';
import { IServer } from './server';

export type TicketStatus = 'Open' | 'In Progress' | 'Closed';

export interface ITicket extends IDiodeEntity {
  name: string;
  ticketId: string;
  details?: string;
  status?: TicketStatus;
  applications: IApplication[];
  servers: IServer[];
  estimatedDueDate?: Date;
}
