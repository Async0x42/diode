export interface ICalendarItem {
  id: number;
  title: string;
  category?: string;
  description?: string;
  imageUrl?: string;
  start: Date;
  end: Date;
  allDay?: boolean;
}
