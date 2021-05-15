import { BrdAddModel, BrdModel } from '@daiod/common';
import * as Sequelize from 'sequelize';
import { sequelize } from '~/database/sequelize';

export const Brd = sequelize.define<BrdModel, BrdAddModel>('brd', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  title: Sequelize.STRING,
});
