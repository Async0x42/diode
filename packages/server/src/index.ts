import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotEnvExtended from 'dotenv-extended';
import { EntityManager, EntityRepository, MikroORM, RequestContext } from '@mikro-orm/core';
import { calendarRouter } from './calendar/calendar.router';
import { rfcRouter } from './rfc/rfc.router';
import { brdRouter } from './brd/brd.router';
import { contactRouter } from './contact/contact.router';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/not-found.middleware';
import { initDb } from './database';
import config from './mikro-orm.config';
import { Brd, Calendar, CalendarItem, Contact, Rfc } from './entities';
export * from './entities';

dotEnvExtended.load();

const port: number = parseInt(process.env.PORT as string, 10) || 3000;
const app = express();

export const DI = {} as {
  orm: MikroORM;
  em: EntityManager;
  calendarRepo: EntityRepository<Calendar>;
  calendarItemRepo: EntityRepository<CalendarItem>;
  rfcRepo: EntityRepository<Rfc>;
  brdRepo: EntityRepository<Brd>;
  contactRepo: EntityRepository<Contact>;
};

(async () => {
  DI.orm = await MikroORM.init(config);
  DI.em = DI.orm.em;
  DI.calendarRepo = DI.em.getRepository(Calendar);
  DI.calendarItemRepo = DI.em.getRepository(CalendarItem);
  DI.rfcRepo = DI.em.getRepository(Rfc);
  DI.brdRepo = DI.em.getRepository(Brd);
  DI.contactRepo = DI.em.getRepository(Contact);
  app.use((req, res, next) => RequestContext.create(DI.orm.em, next));
  initDb(true, true);

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use('/api/calendar', calendarRouter);
  app.use('/api/rfcs', rfcRouter);
  app.use('/api/brds', brdRouter);
  app.use('/api/contacts', contactRouter);
  app.use(errorHandler);
  app.use(notFoundHandler);

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
})();
