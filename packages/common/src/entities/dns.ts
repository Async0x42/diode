import { IApplication } from './application';
import { IServer } from './server';

export interface IDns {
  id: number;
  name: string;
  server?: IServer;
  application?: IApplication;
}
