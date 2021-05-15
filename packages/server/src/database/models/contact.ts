import { ContactAddModel, ContactModel } from '@daiod/common';
import * as Sequelize from 'sequelize';
import { sequelize } from '~/database/sequelize';

export const Contact = sequelize.define<ContactModel, ContactAddModel>('contact', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  phoneNumber: Sequelize.STRING,
  emailAddress: Sequelize.STRING,
  position: Sequelize.STRING,
  organization: Sequelize.STRING,
  department: Sequelize.STRING,
  notes: Sequelize.STRING,
});
