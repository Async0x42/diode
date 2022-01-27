import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { WorkOrder } from '../entities';

@Injectable()
export class WorkOrderService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<WorkOrder> = {}, options?: FindOptions<WorkOrder, any> | undefined) {
    const items = await this.em.find<WorkOrder>(WorkOrder, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<WorkOrder, any> | undefined): Promise<WorkOrder | null> {
    const item = await this.em.findOneOrFail<WorkOrder>(WorkOrder, { id } as any, options);
    return item;
  }

  async create(newItem: WorkOrder): Promise<WorkOrder> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: WorkOrder, options?: FindOptions<WorkOrder, any> | undefined): Promise<WorkOrder | null> {
    const item = await this.em.findOneOrFail<WorkOrder>(WorkOrder, { id } as any, options);

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
    const item = await this.em.findOneOrFail(WorkOrder, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
