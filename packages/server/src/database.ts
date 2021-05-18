import { Brd, Calendar, CalendarItem, Contact, Rfc } from './entities';
import { orm } from './';

const createDefaultCalendar = () => {
  const entities = [
    orm.em.create(Calendar, {
      name: 'default',
    }),
  ];

  orm.em.persistAndFlush(entities);
};

const createTestEntries = () => {
  const entities = [
    orm.em.create(Brd, {
      title: 'BRD for a new server',
    }),

    orm.em.create(CalendarItem, {
      title: 'My event title',
      allDay: false,
      category: 'Test category',
      description: 'My description',
      start: new Date(2021, 5, 15),
      end: new Date(2021, 5, 16),
    }),

    orm.em.create(Contact, {
      name: 'Jack John',
      title: 'Director',
      organization: 'My Org 2',
      department: 'Org Department',
      notes: 'This is a much longer note that might wrap around',
      phone: '555-555-5555 x1234',
      email: 'test@canadiantestorg.ca',
    }),
    orm.em.create(Contact, {
      name: 'John Wizer',
      title: 'IM/IT Programmer Analyst',
      organization: 'My Org',
      department: 'Dep A',
      notes: 'This is a longer note',
      phone: 'CSN: 555-5555',
      email: 'test@canadiantestorg.ca',
    }),
    orm.em.create(Contact, {
      name: 'Milly Mally',
      title: 'IM/IT Deployment Specialist',
      organization: 'One Org',
      department: 'Deployment',
      notes: 'Note A',
      phone: '555-555-5555 2345',
      email: 'test@canadiantestorg.ca',
    }),

    orm.em.create(Rfc, {
      title: 'My RFC',
      class: 'Draft',
      purpose: 'Sustain',
    }),
  ];

  orm.em.persistAndFlush(entities);
};

export const initDb = async (forceSync = false, initTestEntries = false) => {
  forceSync && createDefaultCalendar();
  forceSync && initTestEntries && createTestEntries();
  orm.em.flush();
};
