import { Contact } from '@daiod/common';
import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize';

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: new DataTypes.STRING(128),
    },
    lastName: {
      type: new DataTypes.STRING(128),
    },
    phoneNumber: {
      type: new DataTypes.STRING(128),
    },
    emailAddress: {
      type: new DataTypes.STRING(128),
    },
    position: {
      type: new DataTypes.STRING(128),
    },
    organization: {
      type: new DataTypes.STRING(128),
    },
    department: {
      type: new DataTypes.STRING(128),
    },
    notes: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'contacts',
    sequelize, // passing the `sequelize` instance is required
  }
);
