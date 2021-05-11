import { v4 as uuidv4 } from 'uuid';

/**
 * Data Model Interfaces
 */

import { BaseCalendar, Calendar, Calendars } from '@csc/common';

/**
 * In-Memory Store
 */

const calendars: Calendars = {
  '488571f6-8c06-41a8-94c5-669619e26278': {
    id: '488571f6-8c06-41a8-94c5-669619e26278',
    name: 'Burger',
    site: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
  },
  '0565bf14-a6e5-4bb4-9a49-300e323d3d30': {
    id: '0565bf14-a6e5-4bb4-9a49-300e323d3d30',
    name: 'Pizza',
    site: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
  },
  '53c4e85c-2b07-4cfc-81a7-b43be85aa9a3': {
    id: '53c4e85c-2b07-4cfc-81a7-b43be85aa9a3',
    name: 'Tea',
    site: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Calendar[]> => Object.values(calendars);

export const find = async (id: string): Promise<Calendar> => calendars[id];

export const create = async (newCalendar: BaseCalendar): Promise<Calendar> => {
  const id = uuidv4();

  calendars[id] = {
    id,
    ...newCalendar,
  };

  return calendars[id];
};

export const update = async (id: string, itemUpdate: BaseCalendar): Promise<Calendar | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  calendars[id] = { id, ...itemUpdate };

  return calendars[id];
};

export const remove = async (id: string): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete calendars[id];
};
