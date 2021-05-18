import { orm } from '../..';
import { CalendarItem } from '../../entities';
const calendarItemRepo = orm.em.getRepository(CalendarItem);

export const findAll = async (): Promise<CalendarItem[]> => calendarItemRepo.find({}) || [];

export const find = async (id: number): Promise<CalendarItem | null> => calendarItemRepo.findOneOrFail({ id });

export const create = async (newCalendarItem: CalendarItem): Promise<CalendarItem> => {
  const createdCalendarItem = calendarItemRepo.create({
    ...newCalendarItem,
  });

  return createdCalendarItem;
};

export const update = async (id: number, calendarItemUpdate: CalendarItem): Promise<CalendarItem | null> => {
  const foundCalendarItem = await calendarItemRepo.findOneOrFail({ id });

  if (!foundCalendarItem) {
    return null;
  }

  const updatedCalendarItem = await calendarItemRepo.assign(foundCalendarItem, {
    ...calendarItemUpdate,
  });

  return updatedCalendarItem;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundCalendarItem = calendarItemRepo.findOneOrFail({ id });

  if (!foundCalendarItem) {
    return null;
  }

  calendarItemRepo.remove(foundCalendarItem);
};
