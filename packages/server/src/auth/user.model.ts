import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';

export interface UserAddModel {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserModel extends Sequelize.Model<UserModel, UserAddModel> {
  id: number;
  email: string;
  password: string;
  confirmPassword: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserViewModel {
  id: number;
  email: string;
}

export const User = sequelize.define<UserModel, UserAddModel>('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});
