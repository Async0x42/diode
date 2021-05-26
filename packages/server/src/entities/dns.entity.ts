import { IDns } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, OneToOne } from '@mikro-orm/core';
import { Server } from './server.entity';

@Entity()
export class Dns extends BaseEntity<Dns, 'id'> implements IDns {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @OneToOne()
  server?: Server;
}
