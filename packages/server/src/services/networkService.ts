import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { Network } from '../entities';

@Injectable()
export class NetworkService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<Network> = {}, options?: FindOptions<Network, any> | undefined) {
    const items = await this.em.find<Network>(Network, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<Network, any> | undefined): Promise<Network | null> {
    const item = await this.em.findOneOrFail<Network>(Network, { id } as any, options);
    return item;
  }

  async create(newItem: Network): Promise<Network> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: Network, options?: FindOptions<Network, any> | undefined): Promise<Network | null> {
    const item = await this.em.findOneOrFail<Network>(Network, { id } as any, options);

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
    const item = await this.em.findOneOrFail(Network, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
