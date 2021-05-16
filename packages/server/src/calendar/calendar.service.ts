import { Calendar } from '@daiod/common';

export const get = async (): Promise<Calendar | null> => Calendar.findByPk(1);

export const update = async (id: number, calendarUpdate: Calendar): Promise<Calendar | null> => {
  const foundCalendar = await Calendar.findByPk(id);

  if (!foundCalendar) {
    return null;
  }

  const updatedCalendar = await foundCalendar.update({
    ...calendarUpdate,
  });

  return updatedCalendar;
};
