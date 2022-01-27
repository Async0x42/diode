import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { Dependency } from '../entities';

@Injectable()
export class DependencyService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<Dependency> = {}, options?: FindOptions<Dependency, any> | undefined) {
    const items = await this.em.find<Dependency>(Dependency, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<Dependency, any> | undefined): Promise<Dependency | null> {
    const item = await this.em.findOneOrFail<Dependency>(Dependency, { id } as any, options);
    return item;
  }

  async create(newItem: Dependency): Promise<Dependency> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: Dependency, options?: FindOptions<Dependency, any> | undefined): Promise<Dependency | null> {
    const item = await this.em.findOneOrFail<Dependency>(Dependency, { id } as any, options);

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
    const item = await this.em.findOneOrFail(Dependency, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
