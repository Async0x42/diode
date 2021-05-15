import { CalendarItemAddModel, CalendarItemViewModel } from '@daiod/common';
import express, { Request, Response } from 'express';
import * as ItemService from './items.service';

/**
 * Router Definition
 */

export const itemsRouter = express.Router({ mergeParams: true });

/**
 * Controller Definitions
 */

// GET items
itemsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const items: CalendarItemViewModel[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET items/:itemId
itemsRouter.get('/:itemId', async (req: Request, res: Response) => {
  const itemId = req.params.itemId;

  try {
    const item = await ItemService.find(itemId);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send('item not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST items
itemsRouter.post('/', async (req: Request, res: Response) => {
  try {
    const item: CalendarItemAddModel = req.body;
    const newItem = await ItemService.create(item);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT items/:itemId
itemsRouter.put('/:itemId', async (req: Request, res: Response) => {
  const itemId = req.params.itemId;

  try {
    const itemUpdate: CalendarItemAddModel = req.body;
    const existingItem = await ItemService.find(itemId);

    if (existingItem) {
      const updatedItem = await ItemService.update(itemId, itemUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ItemService.create(itemUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:itemId
itemsRouter.delete('/:itemId', async (req: Request, res: Response) => {
  try {
    const itemId = req.params.itemId;
    await ItemService.remove(itemId);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
