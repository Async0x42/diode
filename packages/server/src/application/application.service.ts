import { DI } from '../';
import { Application } from '~/entities';

export const findAll = async (): Promise<Application[]> => (await DI.applicationRepo.find({})) || [];

export const find = async (id: number): Promise<Application | null> => await DI.applicationRepo.findOneOrFail({ id });

export const create = async (newApplication: Application): Promise<Application> => {
  const createdApplication = await DI.applicationRepo.create({
    ...newApplication,
  });
  DI.applicationRepo.persistAndFlush(createdApplication);

  return createdApplication;
};

export const update = async (id: number, dnsUpdate: Application): Promise<Application | null> => {
  const foundApplication = await DI.applicationRepo.findOneOrFail({ id });

  if (!foundApplication) {
    return null;
  }

  const updatedApplication = await DI.applicationRepo.assign(foundApplication, {
    ...dnsUpdate,
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
