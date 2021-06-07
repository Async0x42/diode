import { IPhysicalServer } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, OneToMany, Collection, ManyToOne } from '@mikro-orm/core';
import { Server } from './server.entity';
import { ServerLocation } from './serverLocation.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendPhysicalServer extends Omit<IPhysicalServer, 'servers'> {
  servers: Collection<Server>;
}

@Entity()
export class PhysicalServer extends BaseEntity<PhysicalServer, 'id'> implements IBackendPhysicalServer {
  @PrimaryKey()
  id!: number;

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

  @Property({ onCreate: () => new Date() })
  createdOn!: Date;

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn!: Date;
}
