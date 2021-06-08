import { IEnvironment } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Environment extends BaseEntity<Environment, 'id'> implements IEnvironment {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  shortName?: string;

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
