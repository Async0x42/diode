import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { Zone } from '../entities';

@Injectable()
export class ZoneService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<Zone> = {}, options?: FindOptions<Zone, any> | undefined) {
    const items = await this.em.find<Zone>(Zone, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<Zone, any> | undefined): Promise<Zone | null> {
    const item = await this.em.findOneOrFail<Zone>(Zone, { id } as any, options);
    return item;
  }

  async create(newItem: Zone): Promise<Zone> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: Zone, options?: FindOptions<Zone, any> | undefined): Promise<Zone | null> {
    const item = await this.em.findOneOrFail<Zone>(Zone, { id } as any, options);

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
    const item = await this.em.findOneOrFail(Zone, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
