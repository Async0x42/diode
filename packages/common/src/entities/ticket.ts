import { IApplication } from './application';
import { IDiodeEntity } from './diodeEntity';
import { IContact } from './contact';
import { IServer } from './server';

export type TicketType = 'SSC' | 'EITSM Assyst' | 'Other';
export type TicketStatus = 'Open' | 'Closed' | 'Other';

export interface ITicket extends IDiodeEntity {
  name: string;
  details?: string;
  applications: IApplication[];
  servers: IServer[];
  dueDate?: Date;
  type: TicketType;
  status?: TicketStatus;
  owners: IContact[];
}
