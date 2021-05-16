import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: ':memory:',
});
sequelize.authenticate();
