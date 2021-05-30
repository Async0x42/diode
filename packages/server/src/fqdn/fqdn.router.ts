import express, { Request, Response, Router } from 'express';
import { Fqdn } from '../entities';
import * as FqdnService from './fqdn.service';

export const fqdnRouter: Router = express.Router({ mergeParams: true });

// GET fqdn
fqdnRouter.get('/', async (req: Request, res: Response) => {
  try {
    const fqdn: Fqdn[] = await FqdnService.findAll();

    res.status(200).send(fqdn);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET fqdn/:fqdnId
fqdnRouter.get('/:fqdnId', async (req: Request, res: Response) => {
  try {
    const fqdnId = parseInt(req.params.fqdnId);
    const fqdn = await FqdnService.find(fqdnId);

    if (fqdn) {
      return res.status(200).send(fqdn);
    }

    res.status(404).send('fqdn not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST fqdn
fqdnRouter.post('/', async (req: Request, res: Response) => {
  try {
    const fqdn: Fqdn = req.body;
    const newItem = await FqdnService.create(fqdn);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT fqdn/:fqdnId
fqdnRouter.put('/:fqdnId', async (req: Request, res: Response) => {
  try {
    const fqdnId = parseInt(req.params.fqdnId);
    const fqdnUpdate: Fqdn = req.body;
    const existingItem = await FqdnService.find(fqdnId);

    if (existingItem) {
      const updatedItem = await FqdnService.update(fqdnId, fqdnUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await FqdnService.create(fqdnUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE fqdn/:fqdnId
fqdnRouter.delete('/:fqdnId', async (req: Request, res: Response) => {
  try {
    const fqdnId = parseInt(req.params.fqdnId);
    await FqdnService.remove(fqdnId);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
