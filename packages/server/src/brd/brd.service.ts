import { v4 as uuidv4 } from 'uuid';

/**
 * Data Model Interfaces
 */

import { BaseBrd, Brd, Brds } from '@daiod/common';

/**
 * In-Memory Store
 */

const brds: Brds = {
  '810f136b-f8b1-4967-a665-c7f914b60cc4': {
    id: '810f136b-f8b1-4967-a665-c7f914b60cc4',
    title: 'Pizza Brd1',
  },
  'eb8b63b7-7143-4a14-b24c-37fc9aa862c6': {
    id: 'eb8b63b7-7143-4a14-b24c-37fc9aa862c6',
    title: 'Pizza Brd2',
  },
  '0e17f378-0f90-4d8e-a147-ab0383077519': {
    id: '0e17f378-0f90-4d8e-a147-ab0383077519',
    title: 'Pizza Brd3',
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Brd[]> => Object.values(brds) || [];

export const find = async (id: string): Promise<Brd> => brds[id];

export const create = async (newBrd: BaseBrd): Promise<Brd> => {
  const id = uuidv4();

  brds[id] = {
    id,
    ...newBrd,
  };

  return brds[id];
};

export const update = async (id: string, brdUpdate: BaseBrd): Promise<Brd | null> => {
  const brd = await find(id);

  if (!brd) {
    return null;
  }

  brds[id] = { id, ...brdUpdate };

  return brds[id];
};

export const remove = async (id: string): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete brds[id];
};
