import { Calendar } from '@daiod/common';
import { DataTypes } from 'sequelize';
import { sequelize } from '~/database/sequelize';

Calendar.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
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
