import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { PhysicalServer } from '../entities';

@Injectable()
export class PhysicalServerService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<PhysicalServer> = {}, options?: FindOptions<PhysicalServer, any> | undefined) {
    const items = await this.em.find<PhysicalServer>(PhysicalServer, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<PhysicalServer, any> | undefined): Promise<PhysicalServer | null> {
    const item = await this.em.findOneOrFail<PhysicalServer>(PhysicalServer, { id } as any, options);
    return item;
  }

  async create(newItem: PhysicalServer): Promise<PhysicalServer> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: PhysicalServer, options?: FindOptions<PhysicalServer, any> | undefined): Promise<PhysicalServer | null> {
    const item = await this.em.findOneOrFail<PhysicalServer>(PhysicalServer, { id } as any, options);

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
    const item = await this.em.findOneOrFail(PhysicalServer, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
