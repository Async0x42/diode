import { DI } from '../index';
import { Dns } from '../entities';

export const findAll = async (): Promise<Dns[]> => (await DI.dnsRepo.find({}, ['server'])) || [];

export const find = async (id: number): Promise<Dns | null> => await DI.dnsRepo.findOneOrFail({ id });

export const create = async (newDns: Dns): Promise<Dns> => {
  const createdDns = await DI.dnsRepo.create({
    ...newDns,
  });
  DI.dnsRepo.persistAndFlush(createdDns);

  return createdDns;
};

export const update = async (id: number, dnsUpdate: Dns): Promise<Dns | null> => {
  const foundDns = await DI.dnsRepo.findOneOrFail({ id });

  if (!foundDns) {
    return null;
  }

  const updatedDns = await DI.dnsRepo.assign(foundDns, {
    ...dnsUpdate,
  });
  DI.dnsRepo.flush();

  return updatedDns;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundDns = await DI.dnsRepo.findOneOrFail({ id });

  if (!foundDns) {
    return null;
  }

  await DI.dnsRepo.removeAndFlush(foundDns);
};
