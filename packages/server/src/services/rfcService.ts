import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { Rfc } from '../entities';

@Injectable()
export class RfcService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<Rfc> = {}, options?: FindOptions<Rfc, any> | undefined) {
    const items = await this.em.find<Rfc>(Rfc, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<Rfc, any> | undefined): Promise<Rfc | null> {
    const item = await this.em.findOneOrFail<Rfc>(Rfc, { id } as any, options);
    return item;
  }

  async create(newItem: Rfc): Promise<Rfc> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: Rfc, options?: FindOptions<Rfc, any> | undefined): Promise<Rfc | null> {
    const item = await this.em.findOneOrFail<Rfc>(Rfc, { id } as any, options);

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
    const item = await this.em.findOneOrFail(Rfc, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
