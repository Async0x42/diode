import { Router } from 'express';
import { matchedData, validationResult } from 'express-validator';
import { userRules } from './user.rules';
import { UserService } from './user.service';
import { UserAddModel } from './user.model';

export const userRouter = Router();
const userService = new UserService();

userRouter.post('/verifyToken', async (req, res) => {
  const token = req.headers.authorization;
  if (!token || !process.env.SECRET) return res.status(401).send();

  const isValidToken = await userService.verifyToken(token);

  if (!isValidToken) {
    return res.status(401).send();
  }

  res.json(true);
});

userRouter.post('/register', userRules.forRegister, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return res.status(422).json(errors.array());

  const payload = matchedData(req) as UserAddModel;
  const user = userService.register(payload);

  return user.then((u) => res.json(u));
});

userRouter.post('/login', userRules.forLogin, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return res.status(422).json(errors.array());

  const payload = matchedData(req) as UserAddModel;
  const token = userService.login(payload);

  return token.then((t) => res.json(t));
});
