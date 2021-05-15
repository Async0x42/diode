import { CalendarItemAddModel, CalendarItemViewModel } from '@daiod/common';
import { CalendarItem } from '~/database/models';

export const findAll = async (): Promise<CalendarItemViewModel[]> => CalendarItem.findAll() || [];

export const find = async (id: number): Promise<CalendarItemViewModel | null> => CalendarItem.findByPk(id);

export const create = async (newCalendarItem: CalendarItemAddModel): Promise<CalendarItemViewModel> => {
  const createdCalendarItem = CalendarItem.create({
    ...newCalendarItem,
  });

  return createdCalendarItem;
};

export const update = async (id: number, calendarItemUpdate: CalendarItemAddModel): Promise<CalendarItemViewModel | null> => {
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
