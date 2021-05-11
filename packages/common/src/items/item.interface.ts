export interface BaseItem {
  name: string;
  category: string;
  description: string;
  image: string;
  start: Date;
  end: Date;
  allDay: boolean;
}

export interface Item extends BaseItem {
  id: string;
  calendarId: string;
}
