import { EntityRepository } from '@mikro-orm/core';
import { FastifyInstance, FastifyPluginCallback, FastifyReply, FastifyRequest } from 'fastify';

interface IService<T> {
  findAll: () => Promise<T[]>;
  find: (id: number) => Promise<T | null>;
  create: (newItem: T) => Promise<T>;
  update: (id: number, itemUpdate: T) => Promise<T | null>;
  remove: (id: number) => Promise<null | void>;
}

export const createService = <T>(dbRepo: EntityRepository<T>, columnsToPopulate: string[] = []): IService<T> => {
  const findAll = async (): Promise<T[]> => (await dbRepo.find({}, columnsToPopulate)) || [];

  const find = async (id: number): Promise<T | null> => await dbRepo.findOneOrFail({ id } as any, columnsToPopulate);

  const create = async (newItem: T): Promise<T> => {
    const createdItem = await dbRepo.create({
      ...newItem,
    });
    dbRepo.persistAndFlush(createdItem);

    return createdItem;
  };

  const update = async (id: number, itemUpdate: T): Promise<T | null> => {
    const foundItem = await dbRepo.findOneOrFail({ id } as any);

    if (!foundItem) {
      return null;
    }

    const updatedItem = await dbRepo.assign(foundItem, {
      ...itemUpdate,
    });
    dbRepo.flush();

    return updatedItem;
  };

  const remove = async (id: number): Promise<null | void> => {
    const foundItem = await dbRepo.findOneOrFail({ id } as any);

    if (!foundItem) {
      return null;
    }

    await dbRepo.removeAndFlush(foundItem);
  };

  return {
    findAll,
    find,
    create,
    update,
    remove,
  };
};

export const createRouter = <T>(fastify: FastifyInstance, service: IService<T>): FastifyPluginCallback => {
  return (fastify: FastifyInstance) => {
    // GET items
    fastify.get('/', async function get(request: FastifyRequest, reply: FastifyReply) {
      try {
        const item: T[] = await service.findAll();

        reply.status(200).send(item);
      } catch (e: any) {
        reply.status(500).send(e.message);
      }
    });

    // GET items/:itemId
    fastify.get('/:itemId', async function getItem(request: FastifyRequest, reply: FastifyReply) {
      try {
        const itemId = parseInt((request.params as any).itemId);
        const item = await service.find(itemId);

        if (item) {
          return reply.status(200).send(item);
        }

        reply.status(404).send('item not found');
      } catch (e: any) {
        reply.status(500).send(e.message);
      }
    });

    // POST items
    fastify.post('/', async function createItem(request: FastifyRequest, reply: FastifyReply) {
      try {
        const item: T = request.body as T;
        const newItem = await service.create(item);

        reply.status(201).send(newItem);
      } catch (e: any) {
        reply.status(500).send(e.message);
      }
    });

    // PUT items/:itemId
    fastify.put('/:itemId', async function updateItem(request: FastifyRequest, reply: FastifyReply) {
      try {
        const itemId = parseInt((request.params as any).itemId);
        const itemUpdate: T = request.body as T;
        const existingItem = await service.find(itemId);

        if (existingItem) {
          const updatedItem = await service.update(itemId, itemUpdate);
          return reply.status(200).send(updatedItem);
        }

        const newItem = await service.create(itemUpdate);

        reply.status(201).send(newItem);
      } catch (e: any) {
        reply.status(500).send(e.message);
      }
    });

    // DELETE items/:itemId
    fastify.delete('/:itemId', async function deleteItem(request: FastifyRequest, reply: FastifyReply) {
      try {
        const itemId = parseInt((request.params as any).itemId);
        await service.remove(itemId);

        reply.status(204).send();
      } catch (e: any) {
        reply.status(500).send(e.message);
      }
    });
  };
};
