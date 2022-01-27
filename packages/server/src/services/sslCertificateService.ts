import { Injectable } from '@tsed/common';
import { FilterQuery, FindOptions } from '@mikro-orm/core';
import { Em } from '@tsed/mikro-orm';
import { EntityManager } from '@mikro-orm/mariadb';
import { SslCertificate } from '../entities';

@Injectable()
export class SslCertificateService {
  @Em()
  private readonly em!: EntityManager;

  async findAll(where: FilterQuery<SslCertificate> = {}, options?: FindOptions<SslCertificate, any> | undefined) {
    const items = await this.em.find<SslCertificate>(SslCertificate, where, options);
    return items;
  }

  async find(id: number, options?: FindOptions<SslCertificate, any> | undefined): Promise<SslCertificate | null> {
    const item = await this.em.findOneOrFail<SslCertificate>(SslCertificate, { id } as any, options);
    return item;
  }

  async create(newItem: SslCertificate): Promise<SslCertificate> {
    await this.em.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, itemUpdate: SslCertificate, options?: FindOptions<SslCertificate, any> | undefined): Promise<SslCertificate | null> {
    const item = await this.em.findOneOrFail<SslCertificate>(SslCertificate, { id } as any, options);

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
    const item = await this.em.findOneOrFail(SslCertificate, { id } as any);

    if (!item) {
      return null;
    }

    await this.em.removeAndFlush(item);
  }
}
