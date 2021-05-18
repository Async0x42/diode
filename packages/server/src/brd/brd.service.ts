import { Brd } from '../entities';
import { orm } from '../';

export const findAll = async (): Promise<Brd[]> => orm.em.find(Brd, {}) || [];

export const find = async (id: number): Promise<Brd | null> => orm.em.findOneOrFail(Brd, { id });

export const create = async (newBrd: Brd): Promise<Brd> => {
  const createdBrd = orm.em.create(Brd, {
    ...newBrd,
  });

  return createdBrd;
};

export const update = async (id: number, brdUpdate: Brd): Promise<Brd | null> => {
  const foundBrd = await orm.em.findOneOrFail(Brd, { id });

  if (!foundBrd) {
    return null;
  }

  const updatedBrd = await orm.em.assign(foundBrd, {
    ...brdUpdate,
  });

  return updatedBrd;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundBrd = await orm.em.findOneOrFail(Brd, { id });

  if (!foundBrd) {
    return null;
  }

  orm.em.removeAndFlush(foundBrd);
};
