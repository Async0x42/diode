import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { Server } from '../entities';

@Injectable()
export class ServerService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<Server> = {}, options?: FindOptions<Server, any> | undefined) {
    const items = await this.em.find<Server>(Server, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<Server, any> | undefined): Promise<Server | null> {
    const item = await this.em.findOneOrFail<Server>(Server, { id } as any, options);
    return item;
  }

  async create(newItem: Server): Promise<Server> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: Server, options?: FindOptions<Server, any> | undefined): Promise<Server | null> {
    const item = await this.em.findOneOrFail<Server>(Server, { id } as any, options);

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
    const item = await this.em.findOneOrFail(Server, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
