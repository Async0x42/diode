import express, { Request, Response, Router } from 'express';
import { OperatingSystem } from '../entities';
import * as OperatingSystemService from './operatingSystem.service';

export const operatingSystemRouter: Router = express.Router({ mergeParams: true });

// GET operatingSystems
operatingSystemRouter.get('/', async (req: Request, res: Response) => {
  try {
    const operatingSystems: OperatingSystem[] = await OperatingSystemService.findAll();

    res.status(200).send(operatingSystems);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET operatingSystems/:operatingSystemId
operatingSystemRouter.get('/:operatingSystemId', async (req: Request, res: Response) => {
  try {
    const operatingSystemId = parseInt(req.params.operatingSystemId);
    const operatingSystem = await OperatingSystemService.find(operatingSystemId);

    if (operatingSystem) {
      return res.status(200).send(operatingSystem);
    }

    res.status(404).send('operatingSystem not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST operatingSystems
operatingSystemRouter.post('/', async (req: Request, res: Response) => {
  try {
    const operatingSystem: OperatingSystem = req.body;
    const newItem = await OperatingSystemService.create(operatingSystem);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT operatingSystems/:operatingSystemId
operatingSystemRouter.put('/:operatingSystemId', async (req: Request, res: Response) => {
  try {
    const operatingSystemId = parseInt(req.params.operatingSystemId);
    const operatingSystemUpdate: OperatingSystem = req.body;
    const existingItem = await OperatingSystemService.find(operatingSystemId);

    if (existingItem) {
      const updatedItem = await OperatingSystemService.update(operatingSystemId, operatingSystemUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await OperatingSystemService.create(operatingSystemUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE operatingSystems/:operatingSystemId
operatingSystemRouter.delete('/:operatingSystemId', async (req: Request, res: Response) => {
  try {
    const operatingSystemId = parseInt(req.params.operatingSystemId);
    await OperatingSystemService.remove(operatingSystemId);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
