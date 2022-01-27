import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { ServerLocation } from '../entities';

@Injectable()
export class ServerLocationService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<ServerLocation> = {}, options?: FindOptions<ServerLocation, any> | undefined) {
    const items = await this.em.find<ServerLocation>(ServerLocation, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<ServerLocation, any> | undefined): Promise<ServerLocation | null> {
    const item = await this.em.findOneOrFail<ServerLocation>(ServerLocation, { id } as any, options);
    return item;
  }

  async create(newItem: ServerLocation): Promise<ServerLocation> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: ServerLocation, options?: FindOptions<ServerLocation, any> | undefined): Promise<ServerLocation | null> {
    const item = await this.em.findOneOrFail<ServerLocation>(ServerLocation, { id } as any, options);

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
    const item = await this.em.findOneOrFail(ServerLocation, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
