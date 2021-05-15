import { CalendarAddModel, CalendarModel } from '@daiod/common';
import * as Sequelize from 'sequelize';
import { sequelize } from '~/database/sequelize';

export const Calendar = sequelize.define<CalendarModel, CalendarAddModel>('calendar', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: Sequelize.STRING,
});
