import { IApplication } from './application';
import { IServer } from './server';

export interface IFqdn {
  id: string;
  name: string;
  server?: IServer;
  applications: IApplication[];
  createdOn: Date;
  modifiedOn: Date;
}
