import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { Brd } from '../entities';

@Injectable()
export class BrdService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<Brd> = {}, options?: FindOptions<Brd, any> | undefined) {
    const items = await this.em.find<Brd>(Brd, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<Brd, any> | undefined): Promise<Brd | null> {
    const item = await this.em.findOneOrFail<Brd>(Brd, { id } as any, options);
    return item;
  }

  async create(newItem: Brd): Promise<Brd> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: Brd, options?: FindOptions<Brd, any> | undefined): Promise<Brd | null> {
    const item = await this.em.findOneOrFail<Brd>(Brd, { id } as any, options);

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
    const item = await this.em.findOneOrFail(Brd, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
