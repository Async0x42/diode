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
import { Application, Brd, Calendar, CalendarItem, Contact, Dns, Rfc, Server } from './entities';
import { dnsRouter } from './dns/dns.router';
import { applicationRouter } from './application/application.router';
import { serverRouter } from './server/server.router';
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
  dnsRepo: EntityRepository<Dns>;
  applicationRepo: EntityRepository<Application>;
  serverRepo: EntityRepository<Server>;
};

(async () => {
  DI.orm = await MikroORM.init(config);
  DI.em = DI.orm.em;
  DI.calendarRepo = DI.em.getRepository(Calendar);
  DI.calendarItemRepo = DI.em.getRepository(CalendarItem);
  DI.rfcRepo = DI.em.getRepository(Rfc);
  DI.brdRepo = DI.em.getRepository(Brd);
  DI.contactRepo = DI.em.getRepository(Contact);
  DI.dnsRepo = DI.em.getRepository(Dns);
  DI.applicationRepo = DI.em.getRepository(Application);
  DI.serverRepo = DI.em.getRepository(Server);

  app.use((req, res, next) => RequestContext.create(DI.orm.em, next));

  if (process.env.RESET_DB === 'true') {
    console.log(process.env.RESET_DB);
    console.log('dropping database');
    initDb();
  }
  const migrator = DI.orm.getMigrator();
  await migrator.up(); // runs migrations up to the latest
  DI.em.flush();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use('/api/calendar', calendarRouter);
  app.use('/api/rfcs', rfcRouter);
  app.use('/api/brds', brdRouter);
  app.use('/api/contacts', contactRouter);
  app.use('/api/dns', dnsRouter);
  app.use('/api/applications', applicationRouter);
  app.use('/api/servers', serverRouter);
  app.use(errorHandler);
  app.use(notFoundHandler);

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
})();
