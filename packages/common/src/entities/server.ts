import { IApplication } from './application';
import { IFqdn } from './fqdn';
import { IOperatingSystem } from './operatingSystem';
import { IServerLocation } from './serverLocation';
import { IServerType } from './serverType';
import { IPhysicalServer } from './physicalServer';
import { ISslCertificate } from './sslCertificate';
import { IEnvironment } from './environment';
import { INetwork } from './network';
import { ITicket } from './ticket';

export interface IServer {
  id: string;
  name: string;
  ip?: string;
  notes?: string;
  operatingSystem?: IOperatingSystem;
  applications: IApplication[];
  fqdns: IFqdn[];
  sslCertificates: ISslCertificate[];
  tickets: ITicket[];
  types: IServerType[];
  location?: IServerLocation;
  physicalServer?: IPhysicalServer;
  environment?: IEnvironment;
  network?: INetwork;
  createdOn: Date;
  modifiedOn: Date;
}
