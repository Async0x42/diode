import express, { Request, Response, Router } from 'express';
import { Calendar } from '../entities';
import { itemsRouter } from './items/items.router';
import * as CalendarService from './calendar.service';

export const calendarRouter: Router = express.Router();
calendarRouter.use('/items', itemsRouter);

// GET calendar
calendarRouter.get('/', async (req: Request, res: Response) => {
  try {
    const calendar = await CalendarService.get();

    res.status(200).send(calendar);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// POST calendar
calendarRouter.post('/', async (req: Request, res: Response) => {
  try {
    const calendarUpdate: Calendar = req.body;
    const updatedCalendar = await CalendarService.update(1, calendarUpdate);
    return res.status(200).json(updatedCalendar);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
