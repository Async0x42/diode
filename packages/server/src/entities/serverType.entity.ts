import { IServerType } from '@diode/common';
import { Property, MaxLength, Required } from "@tsed/schema";
import { Entity, Property as Column, ManyToMany, Collection, OneToMany, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Server } from './server.entity';

@Entity()
export class ServerType extends DiodeEntity<ServerType> implements IServerType {
  @Column()
  @Required()
  name!: string;

  @Column()
  shortName?: string;

  @ManyToMany(() => Server, (server) => server.types)
  servers = new Collection<Server>(this);
}
