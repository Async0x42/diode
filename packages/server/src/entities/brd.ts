import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Brd extends BaseEntity<Brd, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  createdAt = new Date();

  @Property()
  updatedAt = new Date();

  // TODO: is needed?
  constructor(title: string) {
    super();
    this.title = title;
  }
}
