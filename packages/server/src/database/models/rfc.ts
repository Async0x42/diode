import { RfcAddModel, RfcModel } from '@daiod/common';
import * as Sequelize from 'sequelize';
import { sequelize } from '~/database/sequelize';

export const Rfc = sequelize.define<RfcModel, RfcAddModel>('rfc', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  class: Sequelize.STRING,
  purpose: Sequelize.STRING,
  description: Sequelize.STRING,
  parentSystem: Sequelize.STRING,
  businessCase: Sequelize.STRING,
  securityImplications: Sequelize.STRING,
  affectedInfrastructure: Sequelize.STRING,
  affectedInformationSystem: Sequelize.STRING,
  conceptOfOperation: Sequelize.STRING,
  conceptOfTesting: Sequelize.STRING,
  conceptofImplementation: Sequelize.STRING,
  backoutPlan: Sequelize.STRING,
  impactAssessmentDueDate: Sequelize.DATE,
});
