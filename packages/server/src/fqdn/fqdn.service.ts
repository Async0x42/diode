import { DI } from '../index';
import { Fqdn } from '../entities';

export const findAll = async (): Promise<Fqdn[]> => (await DI.fqdnRepo.find({}, ['applications', 'server'])) || [];

export const find = async (id: number): Promise<Fqdn | null> => await DI.fqdnRepo.findOneOrFail({ id }, ['applications', 'server']);

export const create = async (newFqdn: Fqdn): Promise<Fqdn> => {
  const createdFqdn = await DI.fqdnRepo.create({
    ...newFqdn,
  });
  DI.fqdnRepo.persistAndFlush(createdFqdn);

  return createdFqdn;
};

export const update = async (id: number, fqdnUpdate: Fqdn): Promise<Fqdn | null> => {
  const foundFqdn = await DI.fqdnRepo.findOneOrFail({ id });

  if (!foundFqdn) {
    return null;
  }

  const updatedFqdn = await DI.fqdnRepo.assign(foundFqdn, {
    ...fqdnUpdate,
  });
  DI.fqdnRepo.flush();

  return updatedFqdn;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundFqdn = await DI.fqdnRepo.findOneOrFail({ id });

  if (!foundFqdn) {
    return null;
  }

  await DI.fqdnRepo.removeAndFlush(foundFqdn);
};
