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

export interface IServer {
  id: number;
  name: string;
  ip?: string;
  notes?: string;
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
  createdOn: Date;
  modifiedOn: Date;
}
