import { Calendar } from '@daiod/common';
import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize';

Calendar.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'calendars',
    sequelize, // passing the `sequelize` instance is required
  }
);
