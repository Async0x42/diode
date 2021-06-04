import { IServer } from './server';
import { IServerLocation } from './serverLocation';

export interface IPhysicalServer {
  id: number;
  name: string;
  baseOperatingSystem?: string;
  hypervisor?: string;
  deviceManufacturer?: string;
  deviceModel?: string;
  processorManufacturer?: string;
  processorModel?: string;
  processorFrequency?: string;
  numberOfProcessors?: number;
  numberOfCores?: number;
  numberOfVirtualMachines?: string;
  clusterName?: string;
  notes?: string;
  servers: IServer[];
  location?: IServerLocation;
}
