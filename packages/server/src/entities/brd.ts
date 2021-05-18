import { IBrd } from '@daiod/common';
import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Brd extends BaseEntity<Brd, 'id'> implements IBrd {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;
}
