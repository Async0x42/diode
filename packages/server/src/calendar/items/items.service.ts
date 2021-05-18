import { DI } from '../../';
import { CalendarItem } from '../../entities';

export const findAll = async (): Promise<CalendarItem[]> => (await DI.calendarItemRepo.find({})) || [];

export const find = async (id: number): Promise<CalendarItem | null> => await DI.calendarItemRepo.findOneOrFail({ id });

export const create = async (newCalendarItem: CalendarItem): Promise<CalendarItem> => {
  const createdCalendarItem = await DI.calendarItemRepo.create({
    ...newCalendarItem,
  });
  DI.calendarItemRepo.persist(createdCalendarItem);

  return createdCalendarItem;
};

export const update = async (id: number, calendarItemUpdate: CalendarItem): Promise<CalendarItem | null> => {
  const foundCalendarItem = await DI.calendarItemRepo.findOneOrFail({ id });

  if (!foundCalendarItem) {
    return null;
  }

  const updatedCalendarItem = await DI.calendarItemRepo.assign(foundCalendarItem, {
    ...calendarItemUpdate,
  });

  return updatedCalendarItem;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundCalendarItem = await DI.calendarItemRepo.findOneOrFail({ id });

  if (!foundCalendarItem) {
    return null;
  }

  await DI.calendarItemRepo.remove(foundCalendarItem);
};
