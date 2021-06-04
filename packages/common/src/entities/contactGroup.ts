import { IContact } from './contact';

export interface IContactGroup {
  id: number;
  name: string;
  phone?: string;
  email?: string;
  title?: string;
  organization?: string;
  department?: string;
  notes?: string;
  contacts: IContact[];
}
