import { Rfc } from '@daiod/common';
import { DataTypes } from 'sequelize';
import { sequelize } from '~/database/sequelize';

Rfc.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    class: {
      type: DataTypes.STRING,
    },
    purpose: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    parentSystem: {
      type: DataTypes.STRING,
    },
    businessCase: {
      type: DataTypes.STRING,
    },
    securityImplications: {
      type: DataTypes.STRING,
    },
    affectedInfrastructure: {
      type: DataTypes.STRING,
    },
    affectedInformationSystem: {
      type: DataTypes.STRING,
    },
    conceptOfOperation: {
      type: DataTypes.STRING,
    },
    conceptOfTesting: {
      type: DataTypes.STRING,
    },
    conceptofImplementation: {
      type: DataTypes.STRING,
    },
    backoutPlan: {
      type: DataTypes.STRING,
    },
    impactAssessmentDueDate: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'rfcs',
    sequelize, // passing the `sequelize` instance is required
  }
);
