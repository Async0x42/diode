import { BrdAddModel, BrdViewModel } from '@daiod/common';
import { Brd } from '~/database/models';

export const findAll = async (): Promise<BrdViewModel[]> => Brd.findAll() || [];

export const find = async (id: number): Promise<BrdViewModel | null> => Brd.findByPk(id);

export const create = async (newBrd: BrdAddModel): Promise<BrdViewModel> => {
  const createdBrd = Brd.create({
    ...newBrd,
  });

  return createdBrd;
};

export const update = async (id: number, brdUpdate: BrdAddModel): Promise<BrdViewModel | null> => {
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
