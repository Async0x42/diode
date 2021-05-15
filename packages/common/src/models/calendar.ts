import { Model, Optional } from 'sequelize';

// We recommend you declare an interface for the attributes, for stricter typechecking
export interface CalendarAttributes {
  id: number;
  name: string;
}

// Some fields are optional when calling CalendarModel.create() or CalendarModel.build()
export interface CalendarCreationAttributes extends Optional<CalendarAttributes, 'id'> {}

// We need to declare an interface for our model that is basically what our class would be
export interface CalendarInstance extends Model<CalendarAttributes, CalendarCreationAttributes>, CalendarAttributes {}

export class Calendar extends Model<CalendarAttributes, CalendarCreationAttributes> implements CalendarAttributes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
