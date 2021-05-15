import express, { Request, Response } from 'express';
import { CalendarAddModel, CalendarViewModel } from '@daiod/common';
import { itemsRouter } from './items/items.router';
import * as CalendarService from './calendar.service';

/**
 * Router Definition
 */

export const calendarRouter = express.Router();

// Nest the items router within the calendar router
calendarRouter.use('/calendar/items', itemsRouter);

/**
 * Controller Definitions
 */

// GET calendar
calendarRouter.get('/', async (req: Request, res: Response) => {
  try {
    const calendar = await CalendarService.get();

    res.status(200).send(calendar);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST calendar
calendarRouter.post('/', async (req: Request, res: Response) => {
  try {
    const calendarUpdate: CalendarAddModel = req.body;
    const updatedCalendar = await CalendarService.update(1, calendarUpdate);
    return res.status(200).json(updatedCalendar);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
