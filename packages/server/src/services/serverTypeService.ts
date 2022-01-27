import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { ServerType } from '../entities';

@Injectable()
export class ServerTypeService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<ServerType> = {}, options?: FindOptions<ServerType, any> | undefined) {
    const items = await this.em.find<ServerType>(ServerType, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<ServerType, any> | undefined): Promise<ServerType | null> {
    const item = await this.em.findOneOrFail<ServerType>(ServerType, { id } as any, options);
    return item;
  }

  async create(newItem: ServerType): Promise<ServerType> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: ServerType, options?: FindOptions<ServerType, any> | undefined): Promise<ServerType | null> {
    const item = await this.em.findOneOrFail<ServerType>(ServerType, { id } as any, options);

    if (!item) {
      return null;
    }
    const updatedItem = await this.em.assign(item, {
      ...itemUpdate,
    });

    await this.em.flush();
    return updatedItem;
  }

  async remove(id: number): Promise<null | void> {
    const item = await this.em.findOneOrFail(ServerType, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
