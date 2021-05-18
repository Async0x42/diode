import { orm } from '..';
import { Rfc } from '../entities';
const rfcRepo = orm.em.getRepository(Rfc);

export const findAll = async (): Promise<Rfc[]> => rfcRepo.find({}) || [];

export const find = async (id: number): Promise<Rfc | null> => rfcRepo.findOneOrFail({ id });

export const create = async (newRfc: Rfc): Promise<Rfc> => {
  const createdRfc = rfcRepo.create({
    ...newRfc,
  });

  return createdRfc;
};

export const update = async (id: number, rfcUpdate: Rfc): Promise<Rfc | null> => {
  const foundRfc = await rfcRepo.findOneOrFail({ id });

  if (!foundRfc) {
    return null;
  }

  const updatedRfc = await rfcRepo.assign(foundRfc, {
    ...rfcUpdate,
  });

  return updatedRfc;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundRfc = await rfcRepo.findOneOrFail({ id });

  if (!foundRfc) {
    return null;
  }

  rfcRepo.remove(foundRfc);
};
