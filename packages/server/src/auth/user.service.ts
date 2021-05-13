import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Promise } from 'bluebird';
import { User, UserAddModel, UserViewModel } from './user.model';

export class UserService {
  private readonly _saltRounds = 12;
  private readonly _jwtSecret = process.env.SECRET;

  static get userAttributes() {
    return ['id', 'email'];
  }

  private static _user;
  static get user() {
    return UserService._user;
  }

  register({ email, password }: UserAddModel) {
    return bcrypt.hash(password, this._saltRounds).then((hash) => {
      return User.create({ email, password: hash }).then((u) => this.getUserById(u!.id));
    });
  }

  login({ email }: UserAddModel) {
    return User.findOne({ where: { email } }).then((u) => {
      const { id, email } = u!;
      return { token: jwt.sign({ id, email }, this._jwtSecret) };
    });
  }

  verifyToken(token: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this._jwtSecret, (err, decoded) => {
        if (err) {
          resolve(false);
          return;
        }

        UserService._user = User.findByPk(decoded.id);
        resolve(true);
      });
    }) as Promise<boolean>;
  }

  getUserById(id: number) {
    return User.findByPk(id, {
      attributes: UserService.userAttributes,
    }) as Promise<UserViewModel>;
  }
}
