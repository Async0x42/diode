import { IDiodeEntity } from './diodeEntity';
import { IContact } from './contact';
import { IServer } from './server';

export interface IContactGroup extends IDiodeEntity {
  name: string;
  phone?: string;
  email?: string;
  title?: string;
  organization?: string;
  department?: string;
  notes?: string;
  contacts: IContact[];
  supportedServers: IServer[];
}
