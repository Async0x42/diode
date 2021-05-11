import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const notFoundHandler = (request: Request, response: Response, next: NextFunction) => {
  const message = 'Resource not found';

  response.status(404).send(message);
};
