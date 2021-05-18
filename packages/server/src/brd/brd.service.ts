import { Brd } from '../entities';
import { DI } from '../';

export const findAll = async (): Promise<Brd[]> => (await DI.brdRepo.find({})) || [];

export const find = async (id: number): Promise<Brd | null> => await DI.brdRepo.findOneOrFail({ id });

export const create = async (newBrd: Brd): Promise<Brd> => {
  const createdBrd = await DI.brdRepo.create({
    ...newBrd,
  });
  DI.brdRepo.persist(createdBrd);

  return createdBrd;
};

export const update = async (id: number, brdUpdate: Brd): Promise<Brd | null> => {
  const foundBrd = await DI.brdRepo.findOneOrFail({ id });

  if (!foundBrd) {
    return null;
  }

  const updatedBrd = await DI.brdRepo.assign(foundBrd, {
    ...brdUpdate,
  });

  return updatedBrd;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundBrd = await DI.brdRepo.findOneOrFail({ id });

  if (!foundBrd) {
    return null;
  }

  await DI.brdRepo.remove(foundBrd);
};
