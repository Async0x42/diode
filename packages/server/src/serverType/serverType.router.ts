import express, { Request, Response, Router } from 'express';
import { ServerType } from '../entities';
import * as ServerTypeService from './serverType.service';

export const serverTypeRouter: Router = express.Router({ mergeParams: true });

// GET serverTypes
serverTypeRouter.get('/', async (req: Request, res: Response) => {
  try {
    const serverTypes: ServerType[] = await ServerTypeService.findAll();

    res.status(200).send(serverTypes);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET serverTypes/:serverTypeId
serverTypeRouter.get('/:serverTypeId', async (req: Request, res: Response) => {
  try {
    const serverTypeId = parseInt(req.params.serverTypeId);
    const serverType = await ServerTypeService.find(serverTypeId);

    if (serverType) {
      return res.status(200).send(serverType);
    }

    res.status(404).send('serverType not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST serverTypes
serverTypeRouter.post('/', async (req: Request, res: Response) => {
  try {
    const serverType: ServerType = req.body;
    const newItem = await ServerTypeService.create(serverType);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT serverTypes/:serverTypeId
serverTypeRouter.put('/:serverTypeId', async (req: Request, res: Response) => {
  try {
    const serverTypeId = parseInt(req.params.serverTypeId);
    const serverTypeUpdate: ServerType = req.body;
    const existingItem = await ServerTypeService.find(serverTypeId);

    if (existingItem) {
      const updatedItem = await ServerTypeService.update(serverTypeId, serverTypeUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ServerTypeService.create(serverTypeUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE serverTypes/:serverTypeId
serverTypeRouter.delete('/:serverTypeId', async (req: Request, res: Response) => {
  try {
    const serverTypeId = parseInt(req.params.serverTypeId);
    await ServerTypeService.remove(serverTypeId);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
