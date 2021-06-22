import { IDiodeEntity } from './diodeEntity';

export interface IServerLocation extends IDiodeEntity {
  name: string;
  shortName?: string;
}
