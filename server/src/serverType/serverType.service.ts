import { DI } from '../index';
import { ServerType } from '../entities';

export const findAll = async (): Promise<ServerType[]> => (await DI.serverTypeRepo.find({})) || [];

export const find = async (id: number): Promise<ServerType | null> => await DI.serverTypeRepo.findOneOrFail({ id });

export const create = async (newServerType: ServerType): Promise<ServerType> => {
  const createdServerType = await DI.serverTypeRepo.create({
    ...newServerType,
  });
  DI.serverTypeRepo.persistAndFlush(createdServerType);

  return createdServerType;
};

export const update = async (id: number, serverTypeUpdate: ServerType): Promise<ServerType | null> => {
  const foundServerType = await DI.serverTypeRepo.findOneOrFail({ id });

  if (!foundServerType) {
    return null;
  }

  const updatedServerType = await DI.serverTypeRepo.assign(foundServerType, {
    ...serverTypeUpdate,
  });
  DI.serverTypeRepo.flush();

  return updatedServerType;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundServerType = await DI.serverTypeRepo.findOneOrFail({ id });

  if (!foundServerType) {
    return null;
  }

  await DI.serverTypeRepo.removeAndFlush(foundServerType);
};
