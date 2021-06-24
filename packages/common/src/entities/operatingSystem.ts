import { IDiodeEntity } from './diodeEntity';

export interface IOperatingSystem extends IDiodeEntity {
  name: string;
  shortName?: string;
  endOfSupportDate?: Date;
}
