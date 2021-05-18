import { orm } from '..';
import { Calendar } from '../entities';

export const get = async (): Promise<Calendar | null> => orm.em.findOneOrFail(Calendar, { id: 1 });

export const update = async (id: number, calendarUpdate: Calendar): Promise<Calendar | null> => {
  const foundCalendar = await orm.em.findOneOrFail(Calendar, { id });

  if (!foundCalendar) {
    return null;
  }

  const updatedCalendar = await orm.em.assign(foundCalendar, {
    ...calendarUpdate,
  });

  return updatedCalendar;
};
