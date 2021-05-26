import { IApplication } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Application extends BaseEntity<Application, 'id'> implements IApplication {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  shortName?: string;

  @Property()
  description?: string;
}
