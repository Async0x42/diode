import * as Sequelize from 'sequelize';
import { sequelize } from '~/instances/sequelize';

export interface RoleAddModel {
  id: number;
  name: string;
}

export interface RoleModel extends Sequelize.Model<RoleModel, RoleAddModel> {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface RoleViewModel {
  id: number;
  name: string;
}

export const Role = sequelize.define<RoleModel, RoleAddModel>('role', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: Sequelize.STRING,
});
