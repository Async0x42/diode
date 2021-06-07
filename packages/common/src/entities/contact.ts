import { IContactGroup } from './contactGroup';

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
  createdOn: Date;
  modifiedOn: Date;
}
