import { Brd } from '@daiod/common';
import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize';

Brd.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'brds',
    sequelize, // passing the `sequelize` instance is required
  }
);