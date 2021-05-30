import { IOperatingSystem } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, OneToMany, Collection } from '@mikro-orm/core';
import { Server } from './server.entity';

@Entity()
export class OperatingSystem extends BaseEntity<OperatingSystem, 'id'> implements IOperatingSystem {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @OneToMany(() => Server, (server) => server.os)
  servers?: Collection<Server>;
}
