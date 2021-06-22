import { IDiodeEntity } from './diodeEntity';

export interface IEnvironment extends IDiodeEntity {
  name: string;
  shortName?: string;
}
