import { orm } from '..';
import { Calendar } from '../entities';
const calendarRepo = orm.em.getRepository(Calendar);

export const get = async (): Promise<Calendar | null> => calendarRepo.findOneOrFail({ id: 1 });

export const update = async (id: number, calendarUpdate: Calendar): Promise<Calendar | null> => {
  const foundCalendar = await calendarRepo.findOneOrFail({ id });

  if (!foundCalendar) {
    return null;
  }

  const updatedCalendar = await calendarRepo.assign(foundCalendar, {
    ...calendarUpdate,
  });

  return updatedCalendar;
};
