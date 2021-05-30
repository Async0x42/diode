import { DI } from '../index';
import { Application } from '../entities';

export const findAll = async (): Promise<Application[]> => (await DI.applicationRepo.find({}, ['fqdns', 'servers', 'brds'])) || [];

export const find = async (id: number): Promise<Application | null> => await DI.applicationRepo.findOneOrFail({ id }, ['fqdns', 'servers', 'brds']);

export const create = async (newApplication: Application): Promise<Application> => {
  const createdApplication = await DI.applicationRepo.create({
    ...newApplication,
  });
  DI.applicationRepo.persistAndFlush(createdApplication);

  return createdApplication;
};

export const update = async (id: number, fqdnUpdate: Application): Promise<Application | null> => {
  const foundApplication = await DI.applicationRepo.findOneOrFail({ id });

  if (!foundApplication) {
    return null;
  }

  const updatedApplication = await DI.applicationRepo.assign(foundApplication, {
    ...fqdnUpdate,
  });
  DI.applicationRepo.flush();

  return updatedApplication;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundApplication = await DI.applicationRepo.findOneOrFail({ id });

  if (!foundApplication) {
    return null;
  }

  await DI.applicationRepo.removeAndFlush(foundApplication);
};
