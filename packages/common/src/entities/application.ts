import { IBrd } from './brd';
import { IFqdn } from './fqdn';
import { IRfc } from './rfc';
import { IServer } from './server';
import { ISslCertificate } from './sslCertificate';
import { ITicket } from './ticket';

export interface IApplication {
  id: number;
  name: string;
  shortName?: string;
  description?: string;
  fqdns: IFqdn[];
  servers: IServer[];
  brds: IBrd[];
  rfcs: IRfc[];
  tickets: ITicket[];
  sslCertificates: ISslCertificate[];
  createdOn: Date;
  modifiedOn: Date;
}
