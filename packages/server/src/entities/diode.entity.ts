import { BaseEntity, Property, PrimaryKey, AnyEntity } from '@mikro-orm/core';

export abstract class DiodeEntity<T extends AnyEntity<T>> extends BaseEntity<DiodeEntity<T>, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
