import { IApplication } from './application';
import { IServer } from './server';

export interface ISslCertificate {
  id: string;
  sans: string;
  applications: IApplication[];
  servers: IServer[];
  expiry?: Date;
}
