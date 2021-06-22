import { IDiodeEntity } from './diodeEntity';
import { IBrd } from './brd';
import { IFqdn } from './fqdn';
import { IRfc } from './rfc';
import { IServer } from './server';
import { ISslCertificate } from './sslCertificate';
import { IWorkOrder } from './workOrder';

export interface IApplication extends IDiodeEntity {
  name: string;
  shortName?: string;
  description?: string;
  fqdns: IFqdn[];
  servers: IServer[];
  brds: IBrd[];
  rfcs: IRfc[];
  workOrders: IWorkOrder[];
  sslCertificates: ISslCertificate[];
}
