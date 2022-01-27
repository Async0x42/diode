import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { ContactGroup } from '../entities';

@Injectable()
export class ContactGroupService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<ContactGroup> = {}, options?: FindOptions<ContactGroup, any> | undefined) {
    const items = await this.em.find<ContactGroup>(ContactGroup, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<ContactGroup, any> | undefined): Promise<ContactGroup | null> {
    const item = await this.em.findOneOrFail<ContactGroup>(ContactGroup, { id } as any, options);
    return item;
  }

  async create(newItem: ContactGroup): Promise<ContactGroup> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: ContactGroup, options?: FindOptions<ContactGroup, any> | undefined): Promise<ContactGroup | null> {
    const item = await this.em.findOneOrFail<ContactGroup>(ContactGroup, { id } as any, options);

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
    const item = await this.em.findOneOrFail(ContactGroup, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
