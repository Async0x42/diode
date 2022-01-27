import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { Environment } from '../entities';

@Injectable()
export class EnvironmentService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<Environment> = {}, options?: FindOptions<Environment, any> | undefined) {
    const items = await this.em.find<Environment>(Environment, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<Environment, any> | undefined): Promise<Environment | null> {
    const item = await this.em.findOneOrFail<Environment>(Environment, { id } as any, options);
    return item;
  }

  async create(newItem: Environment): Promise<Environment> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: Environment, options?: FindOptions<Environment, any> | undefined): Promise<Environment | null> {
    const item = await this.em.findOneOrFail<Environment>(Environment, { id } as any, options);

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
    const item = await this.em.findOneOrFail(Environment, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
