import { CalendarItemAddModel, CalendarItemModel } from '@daiod/common';
import * as Sequelize from 'sequelize';
import { sequelize } from '~/database/sequelize';

export const CalendarItem = sequelize.define<CalendarItemModel, CalendarItemAddModel>('calendarItem', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  category: Sequelize.STRING,
  description: Sequelize.STRING,
  image: Sequelize.STRING,
  start: Sequelize.DATE,
  end: Sequelize.DATE,
  allDay: Sequelize.STRING,
});
