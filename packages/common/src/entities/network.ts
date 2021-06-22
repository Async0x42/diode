import { IDiodeEntity } from './diodeEntity';

export interface INetwork extends IDiodeEntity {
  name: string;
  shortName?: string;
}
