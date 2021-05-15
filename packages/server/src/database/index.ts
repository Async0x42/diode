import { sequelize } from './sequelize';
import { Calendar } from './models';

const createDefaultCalendar = () => {
  Calendar.create({
    id: 1,
    name: 'default',
  });
};

export const initialize = async (forceSync = false) => {
  await sequelize.sync({ force: forceSync });
  forceSync && createDefaultCalendar();
};

export { sequelize as db } from './sequelize';
