import { IContact } from './contact';

export interface IContactGroup {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  title?: string;
  organization?: string;
  department?: string;
  notes?: string;
  contacts: IContact[];
  createdOn: Date;
  modifiedOn: Date;
}
