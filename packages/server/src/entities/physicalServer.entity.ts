import { IPhysicalServer } from '@diode/common';
import { Entity, Property, OneToMany, Collection, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Server } from './server.entity';
import { ServerLocation } from './serverLocation.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendPhysicalServer extends Omit<IPhysicalServer, 'servers'> {
  servers: Collection<Server>;
}

@Entity()
export class PhysicalServer extends DiodeEntity<PhysicalServer> implements IBackendPhysicalServer {
  @Property()
  name!: string;

  @Property()
  baseOperatingSystem?: string;

  @Property()
  hypervisor?: string;

  @Property()
  deviceManufacturer?: string;

  @Property()
  deviceModel?: string;

  @Property()
  processorManufacturer?: string;

  @Property()
  processorModel?: string;

  @Property()
  processorFrequency?: string;

  @Property()
  numberOfProcessors?: number;

  @Property()
  numberOfCores?: number;

  @Property()
  numberOfVirtualMachines?: string;

  @Property()
  clusterName?: string;

  @ManyToOne()
  location?: ServerLocation;

  @OneToMany(() => Server, (server) => server.physicalServer)
  servers = new Collection<Server>(this);

  @Property({ columnType: 'text' })
  notes?: string;
}
