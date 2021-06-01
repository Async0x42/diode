import { DI } from '../index';
import { ServerLocation } from '../entities';

export const findAll = async (): Promise<ServerLocation[]> => (await DI.serverLocationRepo.find({})) || [];

export const find = async (id: number): Promise<ServerLocation | null> => await DI.serverLocationRepo.findOneOrFail({ id });

export const create = async (newServerLocation: ServerLocation): Promise<ServerLocation> => {
  const createdServerLocation = await DI.serverLocationRepo.create({
    ...newServerLocation,
  });
  DI.serverLocationRepo.persistAndFlush(createdServerLocation);

  return createdServerLocation;
};

export const update = async (id: number, serverLocationUpdate: ServerLocation): Promise<ServerLocation | null> => {
  const foundServerLocation = await DI.serverLocationRepo.findOneOrFail({ id });

  if (!foundServerLocation) {
    return null;
  }

  const updatedServerLocation = await DI.serverLocationRepo.assign(foundServerLocation, {
    ...serverLocationUpdate,
  });
  DI.serverLocationRepo.flush();

  return updatedServerLocation;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundServerLocation = await DI.serverLocationRepo.findOneOrFail({ id });

  if (!foundServerLocation) {
    return null;
  }

  await DI.serverLocationRepo.removeAndFlush(foundServerLocation);
};
