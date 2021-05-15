import { Rfc } from '@daiod/common';

export const findAll = async (): Promise<Rfc[]> => Rfc.findAll() || [];

export const find = async (id: number): Promise<Rfc | null> => Rfc.findByPk(id);

export const create = async (newRfc: Rfc): Promise<Rfc> => {
  const createdRfc = Rfc.create({
    ...newRfc,
  });

  return createdRfc;
};

export const update = async (id: number, rfcUpdate: Rfc): Promise<Rfc | null> => {
  const foundRfc = await Rfc.findByPk(id);

  if (!foundRfc) {
    return null;
  }

  const updatedRfc = await foundRfc.update({
    ...rfcUpdate,
  });

  return updatedRfc;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundRfc = await Rfc.findByPk(id);

  if (!foundRfc) {
    return null;
  }

  foundRfc.destroy();
};
