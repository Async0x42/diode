import { Model, Optional } from 'sequelize';

// We recommend you declare an interface for the attributes, for stricter typechecking
export interface BrdAttributes {
  id: number;
  title: string;
}

// Some fields are optional when calling BrdModel.create() or BrdModel.build()
export interface BrdCreationAttributes extends Optional<BrdAttributes, 'id'> {}

// We need to declare an interface for our model that is basically what our class would be
export interface BrdInstance extends Model<BrdAttributes, BrdCreationAttributes>, BrdAttributes {}

export class Brd extends Model<BrdAttributes, BrdCreationAttributes> implements BrdAttributes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public title!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
