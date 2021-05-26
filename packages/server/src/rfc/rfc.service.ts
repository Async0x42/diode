import { DI } from '../index';
import { Rfc } from '~/entities';

export const findAll = async (): Promise<Rfc[]> => (await DI.rfcRepo.find({})) || [];

export const find = async (id: number): Promise<Rfc | null> => await DI.rfcRepo.findOneOrFail({ id });

export const create = async (newRfc: Rfc): Promise<Rfc> => {
  const createdRfc = await DI.rfcRepo.create({
    ...newRfc,
  });
  DI.rfcRepo.persistAndFlush(createdRfc);

  return createdRfc;
};

export const update = async (id: number, rfcUpdate: Rfc): Promise<Rfc | null> => {
  const foundRfc = await DI.rfcRepo.findOneOrFail({ id });

  if (!foundRfc) {
    return null;
  }

  const updatedRfc = await DI.rfcRepo.assign(foundRfc, {
    ...rfcUpdate,
  });
  DI.rfcRepo.flush();

  return updatedRfc;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundRfc = await DI.rfcRepo.findOneOrFail({ id });

  if (!foundRfc) {
    return null;
  }

  await DI.rfcRepo.removeAndFlush(foundRfc);
};
