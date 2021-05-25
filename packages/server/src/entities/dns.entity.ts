import { IDns } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Dns extends BaseEntity<Dns, 'id'> implements IDns {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  ip?: string;
}
