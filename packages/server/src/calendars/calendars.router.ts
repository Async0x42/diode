/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
import { BaseCalendar, Calendar } from '@csc/common';
import { itemsRouter } from './items/items.router';
import * as CalendarService from './calendars.service';

/**
 * Router Definition
 */

export const calendarsRouter = express.Router();

// Nest the items router within the calendars router
calendarsRouter.use('/:calendarId/items', itemsRouter);

/**
 * Controller Definitions
 */

// GET items
calendarsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const calendars: Calendar[] = await CalendarService.findAll();

    res.status(200).send(calendars);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET items/:calendarId
calendarsRouter.get('/:calendarId', async (req: Request, res: Response) => {
  const calendarId = req.params.calendarId;

  try {
    const calendar: Calendar = await CalendarService.find(calendarId);

    if (calendar) {
      return res.status(200).send(calendar);
    }

    res.status(404).send('calendar not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST items
calendarsRouter.post('/', async (req: Request, res: Response) => {
  try {
    const calendar: BaseCalendar = req.body;

    const newCalendar = await CalendarService.create(calendar);

    res.status(201).json(newCalendar);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT items/:calendarId
calendarsRouter.put('/:calendarId', async (req: Request, res: Response) => {
  const calendarId = req.params.calendarId;

  try {
    const calendarUpdate: Calendar = req.body;

    const existingCalendar: Calendar = await CalendarService.find(calendarId);

    if (existingCalendar) {
      const updatedItem = await CalendarService.update(calendarId, calendarUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await CalendarService.create(calendarUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:calendarId
calendarsRouter.delete('/:calendarId', async (req: Request, res: Response) => {
  try {
    const calendarId = req.params.calendarId;
    await CalendarService.remove(calendarId);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
