import { IApplication } from './application';
import { IDiodeEntity } from './diodeEntity';
import { IServer } from './server';

export interface IFqdn extends IDiodeEntity {
  name: string;
  server?: IServer;
  applications: IApplication[];
}
