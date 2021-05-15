import { Calendar } from '@daiod/common';
import { sequelize } from './sequelize';

// TODO: ./models aren't imported... do we need them here?
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
