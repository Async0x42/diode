import express, { Request, Response, Router } from 'express';
import { Server } from '../entities';
import * as ServerService from './server.service';

export const serverRouter: Router = express.Router({ mergeParams: true });

// GET servers
serverRouter.get('/', async (req: Request, res: Response) => {
  try {
    const servers: Server[] = await ServerService.findAll();

    res.status(200).send(servers);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET servers/:serverId
serverRouter.get('/:serverId', async (req: Request, res: Response) => {
  try {
    const serverId = parseInt(req.params.serverId);
    const server = await ServerService.find(serverId);

    if (server) {
      return res.status(200).send(server);
    }

    res.status(404).send('server not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST servers
serverRouter.post('/', async (req: Request, res: Response) => {
  try {
    const server: Server = req.body;
    const newItem = await ServerService.create(server);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT servers/:serverId
serverRouter.put('/:serverId', async (req: Request, res: Response) => {
  try {
    const serverId = parseInt(req.params.serverId);
    const serverUpdate: Server = req.body;
    const existingItem = await ServerService.find(serverId);

    if (existingItem) {
      const updatedItem = await ServerService.update(serverId, serverUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ServerService.create(serverUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE servers/:serverId
serverRouter.delete('/:serverId', async (req: Request, res: Response) => {
  try {
    const serverId = parseInt(req.params.serverId);
    await ServerService.remove(serverId);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
