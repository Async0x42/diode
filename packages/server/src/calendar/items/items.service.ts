import { CalendarItem } from '../../entities';

export const findAll = async (): Promise<CalendarItem[]> => CalendarItem.findAll() || [];

export const find = async (id: number): Promise<CalendarItem | null> => CalendarItem.findByPk(id);

export const create = async (newCalendarItem: CalendarItem): Promise<CalendarItem> => {
  const createdCalendarItem = CalendarItem.create({
    ...newCalendarItem,
  });

  return createdCalendarItem;
};

export const update = async (id: number, calendarItemUpdate: CalendarItem): Promise<CalendarItem | null> => {
  const foundCalendarItem = await CalendarItem.findByPk(id);

  if (!foundCalendarItem) {
    return null;
  }

  const updatedCalendarItem = await foundCalendarItem.update({
    ...calendarItemUpdate,
  });

  return updatedCalendarItem;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundCalendarItem = await CalendarItem.findByPk(id);

  if (!foundCalendarItem) {
    return null;
  }

  foundCalendarItem.destroy();
};
