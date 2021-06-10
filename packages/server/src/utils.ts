import { EntityRepository } from '@mikro-orm/core';
import express, { Request, Response, Router } from 'express';

interface IService<T> {
  findAll: () => Promise<T[]>;
  find: (id: string) => Promise<T | null>;
  create: (newItem: T) => Promise<T>;
  update: (id: string, itemUpdate: T) => Promise<T | null>;
  remove: (id: string) => Promise<null | void>;
}

export const createService = <T>(dbRepo: EntityRepository<T>, columnsToPopulate: string[] = []): IService<T> => {
  const findAll = async (): Promise<T[]> => (await dbRepo.find({}, columnsToPopulate)) || [];

  const find = async (id: string): Promise<T | null> => await dbRepo.findOneOrFail({ id } as any, columnsToPopulate);

  const create = async (newItem: T): Promise<T> => {
    const createdItem = await dbRepo.create({
      ...newItem,
    });
    dbRepo.persistAndFlush(createdItem);

    return createdItem;
  };

  const update = async (id: string, itemUpdate: T): Promise<T | null> => {
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

  const remove = async (id: string): Promise<null | void> => {
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

export const createRouter = <T>(service: IService<T>) => {
  const router: Router = express.Router({ mergeParams: true });

  // GET items
  router.get('/', async (req: Request, res: Response) => {
    try {
      const item: T[] = await service.findAll();

      res.status(200).send(item);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  });

  // GET items/:itemId
  router.get('/:itemId', async (req: Request, res: Response) => {
    try {
      const itemId = req.params.itemId;
      const item = await service.find(itemId);

      if (item) {
        return res.status(200).send(item);
      }

      res.status(404).send('item not found');
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  });

  // POST items
  router.post('/', async (req: Request, res: Response) => {
    try {
      const item: T = req.body;
      const newItem = await service.create(item);

      res.status(201).json(newItem);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  });

  // PUT items/:itemId
  router.put('/:itemId', async (req: Request, res: Response) => {
    try {
      const itemId = req.params.itemId;
      const itemUpdate: T = req.body;
      const existingItem = await service.find(itemId);

      if (existingItem) {
        const updatedItem = await service.update(itemId, itemUpdate);
        return res.status(200).json(updatedItem);
      }

      const newItem = await service.create(itemUpdate);

      res.status(201).json(newItem);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  });

  // DELETE items/:itemId
  router.delete('/:itemId', async (req: Request, res: Response) => {
    try {
      const itemId = req.params.itemId;
      await service.remove(itemId);

      res.sendStatus(204);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  });

  return router;
};
