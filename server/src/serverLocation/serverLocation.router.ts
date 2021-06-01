import express, { Request, Response, Router } from 'express';
import { ServerLocation } from '../entities';
import * as ServerLocationService from './serverLocation.service';

export const serverLocationRouter: Router = express.Router({ mergeParams: true });

// GET serverLocations
serverLocationRouter.get('/', async (req: Request, res: Response) => {
  try {
    const serverLocations: ServerLocation[] = await ServerLocationService.findAll();

    res.status(200).send(serverLocations);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET serverLocations/:serverLocationId
serverLocationRouter.get('/:serverLocationId', async (req: Request, res: Response) => {
  try {
    const serverLocationId = parseInt(req.params.serverLocationId);
    const serverLocation = await ServerLocationService.find(serverLocationId);

    if (serverLocation) {
      return res.status(200).send(serverLocation);
    }

    res.status(404).send('serverLocation not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST serverLocations
serverLocationRouter.post('/', async (req: Request, res: Response) => {
  try {
    const serverLocation: ServerLocation = req.body;
    const newItem = await ServerLocationService.create(serverLocation);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT serverLocations/:serverLocationId
serverLocationRouter.put('/:serverLocationId', async (req: Request, res: Response) => {
  try {
    const serverLocationId = parseInt(req.params.serverLocationId);
    const serverLocationUpdate: ServerLocation = req.body;
    const existingItem = await ServerLocationService.find(serverLocationId);

    if (existingItem) {
      const updatedItem = await ServerLocationService.update(serverLocationId, serverLocationUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ServerLocationService.create(serverLocationUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE serverLocations/:serverLocationId
serverLocationRouter.delete('/:serverLocationId', async (req: Request, res: Response) => {
  try {
    const serverLocationId = parseInt(req.params.serverLocationId);
    await ServerLocationService.remove(serverLocationId);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
