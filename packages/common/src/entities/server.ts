import { IApplication } from './application';
import { IFqdn } from './fqdn';

export interface IServer {
  id: number;
  name: string;
  ip?: string;
  notes?: string;
  os?: OperatingSystem;
  applications?: IApplication[];
  fqdns?: IFqdn[];
  types?: ServerType[];
  location?: ServerLocation;
}
