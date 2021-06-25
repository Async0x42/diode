import { IApplication } from './application';
import { IFqdn } from './fqdn';
import { IOperatingSystem } from './operatingSystem';
import { IServerLocation } from './serverLocation';
import { IServerType } from './serverType';
import { IPhysicalServer } from './physicalServer';
import { ISslCertificate } from './sslCertificate';
import { IEnvironment } from './environment';
import { INetwork } from './network';
import { IWorkOrder } from './workOrder';
import { IZone } from './zone';
import { IDiodeEntity } from './diodeEntity';
import { ITicket } from './ticket';
import { IDependency } from './dependency';

export interface IServer extends IDiodeEntity {
  name: string;
  ip?: string;
  notes?: string;
  storageSpace?: number;
  systemMemory?: number;
  operatingSystem?: IOperatingSystem;
  applications: IApplication[];
  fqdns: IFqdn[];
  sslCertificates: ISslCertificate[];
  workOrders: IWorkOrder[];
  types: IServerType[];
  zone?: IZone;
  location?: IServerLocation;
  physicalServer?: IPhysicalServer;
  environment?: IEnvironment;
  network?: INetwork;
  tickets: ITicket[];
  dependencies: IDependency[];
}
