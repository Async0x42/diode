import { CalendarAddModel, CalendarViewModel } from '@daiod/common';
import { Calendar } from '~/database/models';

export const get = async (): Promise<CalendarViewModel | null> => Calendar.findByPk(1);

export const update = async (id: number, calendarUpdate: CalendarAddModel): Promise<CalendarViewModel | null> => {
  const foundCalendar = await Calendar.findByPk(id);

  if (!foundCalendar) {
    return null;
  }

  const updatedCalendar = await foundCalendar.update({
    ...calendarUpdate,
  });

  return updatedCalendar;
};
