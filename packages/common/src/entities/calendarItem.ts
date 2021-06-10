export interface ICalendarItem {
  id: string;
  title: string;
  category?: string;
  description?: string;
  imageUrl?: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  createdOn: Date;
  modifiedOn: Date;
}
