import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { Contact } from '../entities';

@Injectable()
export class ContactService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<Contact> = {}, options?: FindOptions<Contact, any> | undefined) {
    const items = await this.em.find<Contact>(Contact, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<Contact, any> | undefined): Promise<Contact | null> {
    const item = await this.em.findOneOrFail<Contact>(Contact, { id } as any, options);
    return item;
  }

  async create(newItem: Contact): Promise<Contact> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: Contact, options?: FindOptions<Contact, any> | undefined): Promise<Contact | null> {
    const item = await this.em.findOneOrFail<Contact>(Contact, { id } as any, options);

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
    const item = await this.em.findOneOrFail(Contact, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
