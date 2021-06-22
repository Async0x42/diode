import { IDiodeEntity } from './diodeEntity';

export interface IServerType extends IDiodeEntity {
  name: string;
  shortName?: string;
}
