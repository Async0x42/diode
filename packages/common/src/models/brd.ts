import * as Sequelize from 'sequelize';

export interface BrdAddModel {
  title: string;
}

export interface BrdModel extends Sequelize.Model<BrdModel, BrdAddModel> {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface BrdViewModel {
  id: number;
  title: string;
}
