import { IApplication } from './application';
import { IDiodeEntity } from './diodeEntity';
import { IServer } from './server';

export interface IDependency extends IDiodeEntity {
  name: string;
  packageName?: string;
  version?: string;
  endOfSupportDate?: Date;
  applications: IApplication[];
  servers: IServer[];
}
