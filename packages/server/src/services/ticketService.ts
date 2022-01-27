import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { Ticket } from '../entities';

@Injectable()
export class TicketService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<Ticket> = {}, options?: FindOptions<Ticket, any> | undefined) {
    const items = await this.em.find<Ticket>(Ticket, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<Ticket, any> | undefined): Promise<Ticket | null> {
    const item = await this.em.findOneOrFail<Ticket>(Ticket, { id } as any, options);
    return item;
  }

  async create(newItem: Ticket): Promise<Ticket> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: Ticket, options?: FindOptions<Ticket, any> | undefined): Promise<Ticket | null> {
    const item = await this.em.findOneOrFail<Ticket>(Ticket, { id } as any, options);

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
    const item = await this.em.findOneOrFail(Ticket, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
