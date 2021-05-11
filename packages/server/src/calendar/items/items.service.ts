import { v4 as uuidv4 } from 'uuid';

/**
 * Data Model Interfaces
 */

import { BaseItem, Item, Items } from '@daiod/common';

/**
 * In-Memory Store
 */

const items: Items = {
  '810f136b-f8b1-4967-a665-c7f914b60cc4': {
    id: '810f136b-f8b1-4967-a665-c7f914b60cc4',
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

export const findAll = async (): Promise<Item[]> => Object.values(items) || [];

export const find = async (id: string): Promise<Item> => items[id];

export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = uuidv4();

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};

export const update = async (id: string, itemUpdate: BaseItem): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};

export const remove = async (id: string): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};
