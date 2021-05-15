import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('sqlite::memory:'); // TODO: if production, use .env DB variables
sequelize.authenticate();
