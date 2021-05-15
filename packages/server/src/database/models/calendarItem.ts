import { CalendarItem } from '@daiod/common';
import { DataTypes } from 'sequelize';
import { sequelize } from '~/database/sequelize';

CalendarItem.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    category: {
      type: new DataTypes.STRING(128),
    },
    description: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: new DataTypes.STRING(128),
    },
    start: {
      type: DataTypes.DATE,
    },
    end: {
      type: DataTypes.DATE,
    },
    allDay: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: 'calendarItems',
    sequelize, // passing the `sequelize` instance is required
  }
);
