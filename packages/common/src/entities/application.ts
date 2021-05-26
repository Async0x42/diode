import { IDns } from './dns';
import { IServer } from './server';

export interface IApplication {
  id: number;
  name: string;
  shortName?: string;
  description?: string;
  dns?: IDns;
  server?: IServer;
}
