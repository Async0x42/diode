import * as Sequelize from 'sequelize';

export interface CalendarAddModel {
  id: number;
  name: string;
}

export interface CalendarModel extends Sequelize.Model<CalendarModel, CalendarAddModel> {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface CalendarViewModel {
  id: number;
  name: string;
}
