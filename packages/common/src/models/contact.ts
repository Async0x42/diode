import { Model, Optional } from 'sequelize';

// We recommend you declare an interface for the attributes, for stricter typechecking
export interface ContactAttributes {
  id: number;
  name: string;
  phone?: string;
  email?: string;
  title?: string;
  organization?: string;
  department?: string;
  notes?: string;
}

// Some fields are optional when calling ContactModel.create() or ContactModel.build()
export interface ContactCreationAttributes extends Optional<ContactAttributes, 'id'> {}

// We need to declare an interface for our model that is basically what our class would be
export interface ContactInstance extends Model<ContactAttributes, ContactCreationAttributes>, ContactAttributes {}

export class Contact extends Model<ContactAttributes, ContactCreationAttributes> implements ContactAttributes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public phone?: string;
  public email?: string;
  public title?: string;
  public organization?: string;
  public department?: string;
  public notes?: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
