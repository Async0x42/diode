import express, { Request, Response, Router } from 'express';
import * as ApplicationService from './application.service';
import { Application } from '~/entities';

export const applicationRouter: Router = express.Router({ mergeParams: true });

// GET applications
applicationRouter.get('/', async (req: Request, res: Response) => {
  try {
    const application: Application[] = await ApplicationService.findAll();

    res.status(200).send(application);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET applications/:applicationId
applicationRouter.get('/:applicationId', async (req: Request, res: Response) => {
  try {
    const applicationId = parseInt(req.params.applicationId);
    const application = await ApplicationService.find(applicationId);

    if (application) {
      return res.status(200).send(application);
    }

    res.status(404).send('application not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST applications
applicationRouter.post('/', async (req: Request, res: Response) => {
  try {
    const application: Application = req.body;
    const newItem = await ApplicationService.create(application);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT applications/:applicationId
applicationRouter.put('/:applicationId', async (req: Request, res: Response) => {
  try {
    const applicationId = parseInt(req.params.applicationId);
    const applicationUpdate: Application = req.body;
    const existingItem = await ApplicationService.find(applicationId);

    if (existingItem) {
      const updatedItem = await ApplicationService.update(applicationId, applicationUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ApplicationService.create(applicationUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE application/:applicationId
applicationRouter.delete('/:applicationId', async (req: Request, res: Response) => {
  try {
    const applicationId = parseInt(req.params.applicationId);
    await ApplicationService.remove(applicationId);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
