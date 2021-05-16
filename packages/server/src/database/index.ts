import { Brd, Calendar, CalendarItem, Contact, Rfc } from '@daiod/common';
import { sequelize } from './sequelize';
import './models';

const createDefaultCalendar = () => {
  Calendar.create({
    name: 'default',
  });
};

const createTestEntries = () => {
  Brd.create({
    title: 'BRD for a new server',
  });

  CalendarItem.create({
    title: 'My event title',
    allDay: false,
    category: 'Test category',
    description: 'My description',
    start: new Date(2021, 5, 15),
    end: new Date(2021, 5, 16),
  });

  Contact.create({
    firstName: 'Jack',
    lastName: 'John',
  });

  Rfc.create({
    title: 'My RFC',
    class: 'Draft',
    purpose: 'Sustain',
  });
};

export const initialize = async (forceSync = false, initTestEntries = false) => {
  await sequelize.sync({ force: forceSync });
  forceSync && createDefaultCalendar();

  initTestEntries && createTestEntries();
};

export { sequelize as db } from './sequelize';
