import { IApplication } from './application';
import { IFqdn } from './fqdn';
import { IOperatingSystem } from './operatingSystem';
import { IServerLocation } from './serverLocation';
import { IServerType } from './serverType';

export interface IServer {
  id: number;
  name: string;
  ip?: string;
  notes?: string;
  operatingSystem?: IOperatingSystem;
  applications: IApplication[];
  fqdns: IFqdn[];
  types: IServerType[];
  location?: IServerLocation;
}
