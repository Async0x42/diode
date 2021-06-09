import { IContactGroup } from './contactGroup';
import { ITicket } from './ticket';

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
  tickets: ITicket[];
  createdOn: Date;
  modifiedOn: Date;
}
