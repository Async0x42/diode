import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { OperatingSystem } from '../entities';

@Injectable()
export class OperatingSystemService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<OperatingSystem> = {}, options?: FindOptions<OperatingSystem, any> | undefined) {
    const items = await this.em.find<OperatingSystem>(OperatingSystem, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<OperatingSystem, any> | undefined): Promise<OperatingSystem | null> {
    const item = await this.em.findOneOrFail<OperatingSystem>(OperatingSystem, { id } as any, options);
    return item;
  }

  async create(newItem: OperatingSystem): Promise<OperatingSystem> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: OperatingSystem, options?: FindOptions<OperatingSystem, any> | undefined): Promise<OperatingSystem | null> {
    const item = await this.em.findOneOrFail<OperatingSystem>(OperatingSystem, { id } as any, options);

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
    const item = await this.em.findOneOrFail(OperatingSystem, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
