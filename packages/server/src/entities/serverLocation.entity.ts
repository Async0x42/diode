import { IServerLocation } from '@diode/common';
import { Property, MaxLength, Required } from "@tsed/schema";
import { Entity, Property as Column, ManyToMany, Collection, OneToMany, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Server } from './server.entity';

@Entity()
export class ServerLocation extends DiodeEntity<ServerLocation> implements IServerLocation {
  @Column()
  @Required()
  name!: string;

  @Column()
  shortName?: string;

  @OneToMany(() => Server, (server) => server.location)
  servers = new Collection<Server>(this);
}
