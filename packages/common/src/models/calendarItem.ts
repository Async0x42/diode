import * as Sequelize from 'sequelize';

export interface CalendarItemAddModel {
  title: string;
  category: string;
  description: string;
  image: string;
  start: Date;
  end: Date;
  allDay: boolean;
}

export interface CalendarItemModel extends Sequelize.Model<CalendarItemModel, CalendarItemAddModel> {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  start: Date;
  end: Date;
  allDay: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CalendarItemViewModel {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  start: Date;
  end: Date;
  allDay: boolean;
}
