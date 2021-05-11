/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
import { BaseFilter, Filter } from '@csc/common';
import * as FilterService from './filters.service';

/**
 * Router Definition
 */

export const filtersRouter = express.Router({ mergeParams: true });

/**
 * Controller Definitions
 */

// GET filters
filtersRouter.get('/', async (req: Request, res: Response) => {
  const calendarId = req.params.calendarId;

  try {
    const filters: Filter[] = await FilterService.findAll(calendarId);

    res.status(200).send(filters);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET filters/:filterId
filtersRouter.get('/:filterId', async (req: Request, res: Response) => {
  const calendarId = req.params.calendarId;
  const filterId = req.params.filterId;

  try {
    const filter: Filter = await FilterService.find(filterId);

    if (filter) {
      return res.status(200).send(filter);
    }

    res.status(404).send('filter not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST filters
filtersRouter.post('/', async (req: Request, res: Response) => {
  const calendarId = req.params.calendarId;

  try {
    const filter: BaseFilter = req.body;

    const newFilter = await FilterService.create(filter, calendarId);

    res.status(201).json(newFilter);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT filters/:filterId
filtersRouter.put('/:filterId', async (req: Request, res: Response) => {
  const calendarId = req.params.calendarId;
  const filterId = req.params.filterId;

  try {
    const filterUpdate: Filter = req.body;

    const existingFilter: Filter = await FilterService.find(filterId);

    if (existingFilter) {
      const updatedFilter = await FilterService.update(filterId, filterUpdate);
      return res.status(200).json(updatedFilter);
    }

    const newFilter = await FilterService.create(filterUpdate, calendarId);

    res.status(201).json(newFilter);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE filters/:filterId
filtersRouter.delete('/:filterId', async (req: Request, res: Response) => {
  try {
    const filterId = req.params.filterId;
    await FilterService.remove(filterId);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
