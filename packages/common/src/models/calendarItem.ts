import { Model, Optional } from 'sequelize';

// We recommend you declare an interface for the attributes, for stricter typechecking
export interface CalendarItemAttributes {
  id: number;
  title: string;
  category?: string;
  description?: string;
  imageUrl?: string;
  start: Date;
  end: Date;
  allDay: boolean;
}

// Some fields are optional when calling CalendarItemModel.create() or CalendarItemModel.build()
export interface CalendarItemCreationAttributes extends Optional<CalendarItemAttributes, 'id'> {}

// We need to declare an interface for our model that is basically what our class would be
export interface CalendarItemInstance extends Model<CalendarItemAttributes, CalendarItemCreationAttributes>, CalendarItemAttributes {}

export class CalendarItem extends Model<CalendarItemAttributes, CalendarItemCreationAttributes> implements CalendarItemAttributes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public title!: string;
  public category?: string;
  public description?: string;
  public imageUrl?: string;
  public start!: Date;
  public end!: Date;
  public allDay!: boolean;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
