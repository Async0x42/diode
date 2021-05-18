import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class CalendarItem extends BaseEntity<CalendarItem, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  category?: string;

  @Property()
  description?: string;

  @Property()
  imageUrl?: string;

  @Property()
  start!: Date;

  @Property()
  end!: Date;

  @Property()
  allDay = false;

  @Property()
  createdAt = new Date();

  @Property()
  updatedAt = new Date();

  // TODO: is needed?
  constructor(title: string, start: Date, end: Date) {
    super();
    this.title = title;
    this.start = start;
    this.end = end;
  }
}
