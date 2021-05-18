import { orm } from '..';
import { Rfc } from '../entities';

export const findAll = async (): Promise<Rfc[]> => orm.em.find(Rfc, {}) || [];

export const find = async (id: number): Promise<Rfc | null> => orm.em.findOneOrFail(Rfc, { id });

export const create = async (newRfc: Rfc): Promise<Rfc> => {
  const createdRfc = orm.em.create(Rfc, {
    ...newRfc,
  });

  return createdRfc;
};

export const update = async (id: number, rfcUpdate: Rfc): Promise<Rfc | null> => {
  const foundRfc = await orm.em.findOneOrFail(Rfc, { id });

  if (!foundRfc) {
    return null;
  }

  const updatedRfc = await orm.em.assign(foundRfc, {
    ...rfcUpdate,
  });

  return updatedRfc;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundRfc = await orm.em.findOneOrFail(Rfc, { id });

  if (!foundRfc) {
    return null;
  }

  orm.em.remove(foundRfc);
};
