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
    name: 'Jack John',
    title: 'Director',
    organization: 'My Org 2',
    department: 'Org Department',
    notes: 'This is a much longer note that might wrap around',
    phone: '555-555-5555 x1234',
    email: 'test@canadiantestorg.ca',
  });
  Contact.create({
    name: 'John Wizer',
    title: 'IM/IT Programmer Analyst',
    organization: 'My Org',
    department: 'Dep A',
    notes: 'This is a longer note',
    phone: 'CSN: 555-5555',
    email: 'test@canadiantestorg.ca',
  });
  Contact.create({
    name: 'Milly Mally',
    title: 'IM/IT Deployment Specialist',
    organization: 'One Org',
    department: 'Deployment',
    notes: 'Note A',
    phone: '555-555-5555 2345',
    email: 'test@canadiantestorg.ca',
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
