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
    name: {
      type: new DataTypes.STRING(128),
    },
    phone: {
      type: new DataTypes.STRING(128),
    },
    email: {
      type: new DataTypes.STRING(128),
    },
    title: {
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
