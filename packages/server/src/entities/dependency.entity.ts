import { IDependency } from '@diode/common';
import { Property, MaxLength, Required } from "@tsed/schema";
import { Entity, Property as Column, ManyToMany, Collection, OneToMany, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Server } from './server.entity';
import { Application } from './application.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendDependency extends Omit<IDependency, 'applications' | 'servers'> {
  applications: Collection<Application>;
  servers: Collection<Server>;
}

@Entity()
export class Dependency extends DiodeEntity<Dependency> implements IBackendDependency {
  @Column()
  @Required()
  name!: string;

  @Column()
  packageName?: string;

  @Column()
  version?: string;

  @Column()
  endOfSupportDate?: Date;

  @ManyToMany(() => Application, (application) => application.dependencies)
  applications = new Collection<Application>(this);

  @ManyToMany(() => Server, (server) => server.dependencies)
  servers = new Collection<Server>(this);
}
