import { DI } from '../index';
import { Server } from '../entities';

export const findAll = async (): Promise<Server[]> =>
  (await DI.serverRepo.find({}, ['fqdns', 'applications', 'types', 'location', 'operatingSystem'])) || [];

export const find = async (id: number): Promise<Server | null> =>
  await DI.serverRepo.findOneOrFail({ id }, ['fqdns', 'applications', 'types', 'location', 'operatingSystem']);

export const create = async (newServer: Server): Promise<Server> => {
  const createdServer = await DI.serverRepo.create({
    ...newServer,
  });
  DI.serverRepo.persistAndFlush(createdServer);

  return createdServer;
};

export const update = async (id: number, serverUpdate: Server): Promise<Server | null> => {
  const foundServer = await DI.serverRepo.findOneOrFail({ id });

  if (!foundServer) {
    return null;
  }

  const updatedServer = await DI.serverRepo.assign(foundServer, {
    ...serverUpdate,
  });
  DI.serverRepo.flush();

  return updatedServer;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundServer = await DI.serverRepo.findOneOrFail({ id });

  if (!foundServer) {
    return null;
  }

  await DI.serverRepo.removeAndFlush(foundServer);
};
