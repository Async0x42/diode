import { sequelize } from './sequelize';
import { Role } from '~/auth/role.model';
import { User } from '~/auth/user.model';

Role.belongsToMany(User, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId',
});
User.belongsToMany(Role, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId',
});

const db = {
  user: User,
  role: Role,
  ROLES: ['user', 'moderator', 'admin'],
  sequelize,
};

const createRoles = () => {
  Role.create({
    id: 1,
    name: 'user',
  });

  Role.create({
    id: 2,
    name: 'moderator',
  });

  Role.create({
    id: 3,
    name: 'admin',
  });
};

export const initialize = async (forceSync = false) => {
  await db.sequelize.sync({ force: forceSync });
  forceSync && console.log('Drop and Resync Db');
  createRoles();
};
