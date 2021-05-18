import { Brd } from '../entities';
import { orm } from '../';
const brdRepo = orm.em.getRepository(Brd);

export const findAll = async (): Promise<Brd[]> => brdRepo.find({}) || [];

export const find = async (id: number): Promise<Brd | null> => brdRepo.findOneOrFail({ id });

export const create = async (newBrd: Brd): Promise<Brd> => {
  const createdBrd = brdRepo.create({
    ...newBrd,
  });

  return createdBrd;
};

export const update = async (id: number, brdUpdate: Brd): Promise<Brd | null> => {
  const foundBrd = await brdRepo.findOneOrFail({ id });

  if (!foundBrd) {
    return null;
  }

  const updatedBrd = await brdRepo.assign(foundBrd, {
    ...brdUpdate,
  });

  return updatedBrd;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundBrd = await brdRepo.findOneOrFail({ id });

  if (!foundBrd) {
    return null;
  }

  brdRepo.removeAndFlush(foundBrd);
};
