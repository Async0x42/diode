import { v4 as uuidv4 } from 'uuid';

/**
 * Data Model Interfaces
 */

import { BaseItem, Item, Items } from '@csc/common';

/**
 * In-Memory Store
 */

const items: Items = {
  '810f136b-f8b1-4967-a665-c7f914b60cc4': {
    id: '810f136b-f8b1-4967-a665-c7f914b60cc4',
    calendarId: '488571f6-8c06-41a8-94c5-669619e26278',
    name: 'Burger',
    category: 'Food',
    description: 'Tasty',
    image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
    start: new Date(),
    end: new Date(),
    allDay: false,
  },
  'eb8b63b7-7143-4a14-b24c-37fc9aa862c6': {
    id: 'eb8b63b7-7143-4a14-b24c-37fc9aa862c6',
    calendarId: '0565bf14-a6e5-4bb4-9a49-300e323d3d30',
    name: 'Pizza',
    category: 'Food',
    description: 'Cheesy',
    image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
    start: new Date(),
    end: new Date(),
    allDay: true,
  },
  '0e17f378-0f90-4d8e-a147-ab0383077519': {
    id: '0e17f378-0f90-4d8e-a147-ab0383077519',
    calendarId: '53c4e85c-2b07-4cfc-81a7-b43be85aa9a3',
    name: 'Tea',
    category: 'Drink',
    description: 'Informative',
    image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
    start: new Date(),
    end: new Date(),
    allDay: false,
  },
};

/**
 * Service Methods
 */

export const findAll = async (calendarId: string): Promise<Item[]> => Object.values(items).filter((item) => item.calendarId === calendarId) || [];

export const find = async (id: string): Promise<Item> => items[id];

export const create = async (newItem: BaseItem, calendarId: string): Promise<Item> => {
  const id = uuidv4();

  items[id] = {
    id,
    calendarId,
    ...newItem,
  };

  return items[id];
};

export const update = async (id: string, itemUpdate: BaseItem): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, calendarId: item.calendarId, ...itemUpdate };

  return items[id];
};

export const remove = async (id: string): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};
