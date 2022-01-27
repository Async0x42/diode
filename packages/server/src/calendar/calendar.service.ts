import { DI } from '../legacy-server';
import { Calendar } from '../entities';

export const get = async (): Promise<Calendar | null> => await DI.calendarRepo.findOneOrFail({ id: 1 });

export const update = async (id: number, calendarUpdate: Calendar): Promise<Calendar | null> => {
  const foundCalendar = await DI.calendarRepo.findOneOrFail({ id });

  if (!foundCalendar) {
    return null;
  }

  const updatedCalendar = await DI.calendarRepo.assign(foundCalendar, {
    ...calendarUpdate,
  });

  return updatedCalendar;
};
