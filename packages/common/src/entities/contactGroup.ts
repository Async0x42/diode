import { IDiodeEntity } from './diodeEntity';
import { IContact } from './contact';

export interface IContactGroup extends IDiodeEntity {
  name: string;
  phone?: string;
  email?: string;
  title?: string;
  organization?: string;
  department?: string;
  notes?: string;
  contacts: IContact[];
}
