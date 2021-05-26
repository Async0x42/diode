import { IApplication } from './application';
import { IDns } from './dns';

export interface IServer {
  id: number;
  name: string;
  ip?: string;
  applications?: IApplication[];
  dns?: IDns[];
}
