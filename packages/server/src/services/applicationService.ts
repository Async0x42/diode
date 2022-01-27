import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { Application } from '../entities';

@Injectable()
export class ApplicationService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<Application> = {}, options?: FindOptions<Application, any> | undefined) {
    const items = await this.em.find<Application>(Application, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<Application, any> | undefined): Promise<Application | null> {
    const item = await this.em.findOneOrFail<Application>(Application, { id } as any, options);
    return item;
  }

  async create(newItem: Application): Promise<Application> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: Application, options?: FindOptions<Application, any> | undefined): Promise<Application | null> {
    const item = await this.em.findOneOrFail<Application>(Application, { id } as any, options);

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
    const item = await this.em.findOneOrFail(Application, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
