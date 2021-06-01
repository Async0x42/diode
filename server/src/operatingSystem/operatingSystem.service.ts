import { DI } from '../index';
import { OperatingSystem } from '../entities';

export const findAll = async (): Promise<OperatingSystem[]> => (await DI.operatingSystemRepo.find({})) || [];

export const find = async (id: number): Promise<OperatingSystem | null> => await DI.operatingSystemRepo.findOneOrFail({ id });

export const create = async (newOperatingSystem: OperatingSystem): Promise<OperatingSystem> => {
  const createdOperatingSystem = await DI.operatingSystemRepo.create({
    ...newOperatingSystem,
  });
  DI.operatingSystemRepo.persistAndFlush(createdOperatingSystem);

  return createdOperatingSystem;
};

export const update = async (id: number, operatingSystemUpdate: OperatingSystem): Promise<OperatingSystem | null> => {
  const foundOperatingSystem = await DI.operatingSystemRepo.findOneOrFail({ id });

  if (!foundOperatingSystem) {
    return null;
  }

  const updatedOperatingSystem = await DI.operatingSystemRepo.assign(foundOperatingSystem, {
    ...operatingSystemUpdate,
  });
  DI.operatingSystemRepo.flush();

  return updatedOperatingSystem;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundOperatingSystem = await DI.operatingSystemRepo.findOneOrFail({ id });

  if (!foundOperatingSystem) {
    return null;
  }

  await DI.operatingSystemRepo.removeAndFlush(foundOperatingSystem);
};
