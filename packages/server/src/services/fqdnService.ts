import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { Fqdn } from '../entities';

@Injectable()
export class FqdnService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<Fqdn> = {}, options?: FindOptions<Fqdn, any> | undefined) {
    const items = await this.em.find<Fqdn>(Fqdn, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<Fqdn, any> | undefined): Promise<Fqdn | null> {
    const item = await this.em.findOneOrFail<Fqdn>(Fqdn, { id } as any, options);
    return item;
  }

  async create(newItem: Fqdn): Promise<Fqdn> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: Fqdn, options?: FindOptions<Fqdn, any> | undefined): Promise<Fqdn | null> {
    const item = await this.em.findOneOrFail<Fqdn>(Fqdn, { id } as any, options);

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
    const item = await this.em.findOneOrFail(Fqdn, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
