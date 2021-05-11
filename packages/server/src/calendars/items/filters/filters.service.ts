import { v4 as uuidv4 } from 'uuid';

/**
 * Data Model Interfaces
 */

import { BaseFilter, Filter, Filters } from '@daiod/common';

/**
 * In-Memory Store
 */

const filters: Filters = {
  '810f136b-f8b1-4967-a665-c7f914b60cc4': {
    id: '810f136b-f8b1-4967-a665-c7f914b60cc4',
    name: 'Burger',
  },
  'eb8b63b7-7143-4a14-b24c-37fc9aa862c6': {
    id: 'eb8b63b7-7143-4a14-b24c-37fc9aa862c6',
    name: 'Pizza',
  },
  '0e17f378-0f90-4d8e-a147-ab0383077519': {
    id: '0e17f378-0f90-4d8e-a147-ab0383077519',
    name: 'Tea',
  },
};

/**
 * Service Methods
 */

export const findAll = async (calendarId: string): Promise<Filter[]> =>
  Object.values(filters).filter((filter) => filter.calendarId === calendarId) || [];

export const find = async (id: string): Promise<Filter> => filters[id];

export const create = async (newFilter: BaseFilter, calendarId: string): Promise<Filter> => {
  const id = uuidv4();

  filters[id] = {
    id,
    ...newFilter,
  };

  return filters[id];
};

export const update = async (id: string, filterUpdate: BaseFilter): Promise<Filter | null> => {
  const filter = await find(id);

  if (!filter) {
    return null;
  }

  filters[id] = { id, calendarId: filter.calendarId, ...filterUpdate };

  return filters[id];
};

export const remove = async (id: string): Promise<null | void> => {
  const filter = await find(id);

  if (!filter) {
    return null;
  }

  delete filters[id];
};
