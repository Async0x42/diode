import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(process.env.DB_INIT_PATH);
sequelize.authenticate();
