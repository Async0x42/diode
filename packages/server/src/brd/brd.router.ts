/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
import { BaseBrd, Brd } from '@daiod/common';
import * as BrdService from './brd.service';

/**
 * Router Definition
 */

export const brdRouter = express.Router({ mergeParams: true });

/**
 * Controller Definitions
 */

// GET brds
brdRouter.get('/', async (req: Request, res: Response) => {
  try {
    const brds: Brd[] = await BrdService.findAll();

    res.status(200).send(brds);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET brds/:brdId
brdRouter.get('/:brdId', async (req: Request, res: Response) => {
  const brdId = req.params.brdId;

  try {
    const brd: Brd = await BrdService.find(brdId);

    if (brd) {
      return res.status(200).send(brd);
    }

    res.status(404).send('brd not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST brds
brdRouter.post('/', async (req: Request, res: Response) => {
  try {
    const brd: BaseBrd = req.body;
    const newItem = await BrdService.create(brd);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT brds/:brdId
brdRouter.put('/:brdId', async (req: Request, res: Response) => {
  const brdId = req.params.brdId;

  try {
    const brdUpdate: Brd = req.body;
    const existingItem: Brd = await BrdService.find(brdId);

    if (existingItem) {
      const updatedItem = await BrdService.update(brdId, brdUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await BrdService.create(brdUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE brds/:brdId
brdRouter.delete('/:brdId', async (req: Request, res: Response) => {
  try {
    const brdId = req.params.brdId;
    await BrdService.remove(brdId);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
