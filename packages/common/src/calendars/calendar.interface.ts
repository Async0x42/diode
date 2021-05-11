export interface BaseCalendar {
  name: string;
  site: string;
}

export interface Calendar extends BaseCalendar {
  id: string;
}
