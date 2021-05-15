import { RfcAddModel, RfcViewModel } from '@daiod/common';
import express, { Request, Response } from 'express';
import * as RfcService from './rfc.service';

/**
 * Router Definition
 */

export const rfcRouter = express.Router({ mergeParams: true });

/**
 * Controller Definitions
 */

// GET rfcs
rfcRouter.get('/', async (req: Request, res: Response) => {
  try {
    const rfcs: RfcViewModel[] = await RfcService.findAll();

    res.status(200).send(rfcs);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET rfcs/:rfcId
rfcRouter.get('/:rfcId', async (req: Request, res: Response) => {
  const rfcId = req.params.rfcId;

  try {
    const rfc = await RfcService.find(rfcId);

    if (rfc) {
      return res.status(200).send(rfc);
    }

    res.status(404).send('rfc not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST rfcs
rfcRouter.post('/', async (req: Request, res: Response) => {
  try {
    const rfc: RfcAddModel = req.body;
    const newItem = await RfcService.create(rfc);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT rfcs/:rfcId
rfcRouter.put('/:rfcId', async (req: Request, res: Response) => {
  const rfcId = req.params.rfcId;

  try {
    const rfcUpdate: RfcAddModel = req.body;
    const existingItem = await RfcService.find(rfcId);

    if (existingItem) {
      const updatedItem = await RfcService.update(rfcId, rfcUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await RfcService.create(rfcUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE rfcs/:rfcId
rfcRouter.delete('/:rfcId', async (req: Request, res: Response) => {
  try {
    const rfcId = req.params.rfcId;
    await RfcService.remove(rfcId);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
