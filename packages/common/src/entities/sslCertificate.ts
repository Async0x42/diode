import { IApplication } from './application';
import { IDiodeEntity } from './diodeEntity';
import { IServer } from './server';

export interface ISslCertificate extends IDiodeEntity {
  sans: string;
  applications: IApplication[];
  servers: IServer[];
  expiry?: Date;
}
