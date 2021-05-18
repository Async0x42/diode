import { orm } from '../..';
import { CalendarItem } from '../../entities';

export const findAll = async (): Promise<CalendarItem[]> => orm.em.find(CalendarItem, {}) || [];

export const find = async (id: number): Promise<CalendarItem | null> => orm.em.findOneOrFail(CalendarItem, { id });

export const create = async (newCalendarItem: CalendarItem): Promise<CalendarItem> => {
  const createdCalendarItem = orm.em.create(CalendarItem, {
    ...newCalendarItem,
  });

  return createdCalendarItem;
};

export const update = async (id: number, calendarItemUpdate: CalendarItem): Promise<CalendarItem | null> => {
  const foundCalendarItem = orm.em.findOneOrFail(CalendarItem, { id });

  if (!foundCalendarItem) {
    return null;
  }

  const updatedCalendarItem = await orm.em.assign(foundCalendarItem, {
    ...calendarItemUpdate,
  });

  return updatedCalendarItem;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundCalendarItem = orm.em.findOneOrFail(CalendarItem, { id });

  if (!foundCalendarItem) {
    return null;
  }

  orm.em.remove(foundCalendarItem);
};
