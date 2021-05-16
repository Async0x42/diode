import { Calendar } from '@daiod/common';
import { sequelize } from './sequelize';
import './models';

const createDefaultCalendar = () => {
  Calendar.create({
    name: 'default',
  });
};

export const initialize = async (forceSync = false) => {
  await sequelize.sync({ force: forceSync });
  forceSync && createDefaultCalendar();
};

export { sequelize as db } from './sequelize';
