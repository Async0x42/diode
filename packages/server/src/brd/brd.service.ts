import { Brd } from '@daiod/common';

export const findAll = async (): Promise<Brd[]> => Brd.findAll() || [];

export const find = async (id: number): Promise<Brd | null> => Brd.findByPk(id);

export const create = async (newBrd: Brd): Promise<Brd> => {
  const createdBrd = Brd.create({
    ...newBrd,
  });

  return createdBrd;
};

export const update = async (id: number, brdUpdate: Brd): Promise<Brd | null> => {
  const foundBrd = await Brd.findByPk(id);

  if (!foundBrd) {
    return null;
  }

  const updatedBrd = await foundBrd.update({
    ...brdUpdate,
  });

  return updatedBrd;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundBrd = await Brd.findByPk(id);

  if (!foundBrd) {
    return null;
  }

  foundBrd.destroy();
};
