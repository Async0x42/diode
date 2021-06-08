import { IBrd } from './brd';
import { IFqdn } from './fqdn';
import { IRfc } from './rfc';
import { IServer } from './server';
import { ISslCertificate } from './sslCertificate';

export interface IApplication {
  id: number;
  name: string;
  shortName?: string;
  description?: string;
  fqdns: IFqdn[];
  servers: IServer[];
  brds: IBrd[];
  rfcs: IRfc[];
  sslCertificates: ISslCertificate[];
  createdOn: Date;
  modifiedOn: Date;
}
