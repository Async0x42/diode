import { BaseEntity, Property, PrimaryKey, AnyEntity } from '@mikro-orm/core';
import { IDiodeEntity } from '@diode/common';

export abstract class DiodeEntity<T extends AnyEntity<T>> extends BaseEntity<DiodeEntity<T>, 'id'> implements IDiodeEntity {
  @PrimaryKey()
  id!: number;

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
