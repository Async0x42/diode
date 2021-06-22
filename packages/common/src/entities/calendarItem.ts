import { IDiodeEntity } from './diodeEntity';

export interface ICalendarItem extends IDiodeEntity {
  title: string;
  category?: string;
  description?: string;
  imageUrl?: string;
  start: Date;
  end: Date;
  allDay?: boolean;
}
