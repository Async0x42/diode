
import { Property } from "@tsed/schema";
import { BaseEntity, Property as Column, PrimaryKey, AnyEntity } from '@mikro-orm/core';
import { IDiodeEntity } from '@diode/common';

export abstract class DiodeEntity<T extends AnyEntity<T>> extends BaseEntity<DiodeEntity<T>, 'id'> implements IDiodeEntity {
  @PrimaryKey()
  @Property()
  id!: number;

  @Column({ onCreate: () => new Date() })
  createdOn = new Date();

  @Column({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
