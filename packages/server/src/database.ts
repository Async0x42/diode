import { Brd, Calendar, CalendarItem, Contact, Rfc } from './entities';
import { DI } from './';

const createDefaultCalendar = () => {
  const entities = [
    DI.em.create(Calendar, {
      name: 'default',
    }),
  ];

  DI.em.persist(entities);
};

const createTestEntries = () => {
  const entities = [
    DI.em.create(Brd, {
      title: 'BRD for a new server',
    }),

    DI.em.create(CalendarItem, {
      title: 'My event title',
      allDay: false,
      category: 'Test category',
      description: 'My description',
      start: new Date(2021, 5, 15),
      end: new Date(2021, 5, 16),
    }),

    DI.em.create(Contact, {
      name: 'Jack John',
      title: 'Director',
      organization: 'My Org 2',
      department: 'Org Department',
      notes: 'This is a much longer note that might wrap around',
      phone: '555-555-5555 x1234',
      email: 'test@canadiantestorg.ca',
    }),
    DI.em.create(Contact, {
      name: 'John Wizer',
      title: 'IM/IT Programmer Analyst',
      organization: 'My Org',
      department: 'Dep A',
      notes: 'This is a longer note',
      phone: 'CSN: 555-5555',
      email: 'test@canadiantestorg.ca',
    }),
    DI.em.create(Contact, {
      name: 'Milly Mally',
      title: 'IM/IT Deployment Specialist',
      organization: 'One Org',
      department: 'Deployment',
      notes: 'Note A',
      phone: '555-555-5555 2345',
      email: 'test@canadiantestorg.ca',
    }),

    DI.em.create(Rfc, {
      title: 'My RFC',
      class: 'Draft',
      purpose: 'Sustain',
    }),
  ];

  DI.em.persist(entities);
};

export const initDb = async (forceSync = false, initTestEntries = false) => {
  forceSync && createDefaultCalendar();
  forceSync && initTestEntries && createTestEntries();
  DI.em.flush();
};
