import { IPhysicalServer } from '@diode/common';
import { Property, MaxLength, Required } from "@tsed/schema";
import { Entity, Property as Column, ManyToMany, Collection, OneToMany, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Server } from './server.entity';
import { ServerLocation } from './serverLocation.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendPhysicalServer extends Omit<IPhysicalServer, 'servers'> {
  servers: Collection<Server>;
}

@Entity()
export class PhysicalServer extends DiodeEntity<PhysicalServer> implements IBackendPhysicalServer {
  @Column()
  @Required()
  name!: string;

  @Column()
  baseOperatingSystem?: string;

  @Column()
  hypervisor?: string;

  @Column()
  deviceManufacturer?: string;

  @Column()
  deviceModel?: string;

  @Column()
  processorManufacturer?: string;

  @Column()
  processorModel?: string;

  @Column()
  processorFrequency?: string;

  @Column()
  numberOfProcessors?: number;

  @Column()
  numberOfCores?: number;

  @Column()
  numberOfVirtualMachines?: string;

  @Column()
  clusterName?: string;

  @ManyToOne()
  location?: ServerLocation;

  @OneToMany(() => Server, (server) => server.physicalServer)
  servers = new Collection<Server>(this);

  @Column({ columnType: 'text' })
  notes?: string;
}
