import { IApplication } from './application';
import { IFqdn } from './fqdn';

export type OperatingSystem = '[W] Server 2012R2' | '[W] Server 2016' | '[L] RHEL 7' | '[L] CentOS 7' | 'Unknown';

export interface IServer {
  id: number;
  name: string;
  ip?: string;
  notes?: string;
  os?: OperatingSystem;
  applications?: IApplication[];
  fqdns?: IFqdn[];
}
