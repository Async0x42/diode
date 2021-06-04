import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotEnvExtended from 'dotenv-extended';
import { EntityManager, EntityRepository, MikroORM, RequestContext } from '@mikro-orm/core';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/not-found.middleware';
import config from './mikro-orm.config';
import { Application, Brd, Calendar, CalendarItem, Contact, Fqdn, Rfc, Server } from './entities';
import { OperatingSystem } from './entities/operatingSystem.entity';
import { ServerLocation } from './entities/serverLocation.entity';
import { ServerType } from './entities/serverType.entity';
import { createRouter, createService } from './utils';
import { calendarRouter } from './calendar/calendar.router';
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
  fqdnRepo: EntityRepository<Fqdn>;
  applicationRepo: EntityRepository<Application>;
  serverRepo: EntityRepository<Server>;
  operatingSystemRepo: EntityRepository<OperatingSystem>;
  serverLocationRepo: EntityRepository<ServerLocation>;
  serverTypeRepo: EntityRepository<ServerType>;
};

(async () => {
  DI.orm = await MikroORM.init(config);
  DI.em = DI.orm.em;
  DI.calendarRepo = DI.em.getRepository(Calendar);
  DI.calendarItemRepo = DI.em.getRepository(CalendarItem);
  DI.rfcRepo = DI.em.getRepository(Rfc);
  DI.brdRepo = DI.em.getRepository(Brd);
  DI.contactRepo = DI.em.getRepository(Contact);
  DI.fqdnRepo = DI.em.getRepository(Fqdn);
  DI.applicationRepo = DI.em.getRepository(Application);
  DI.serverRepo = DI.em.getRepository(Server);
  DI.operatingSystemRepo = DI.em.getRepository(OperatingSystem);
  DI.serverLocationRepo = DI.em.getRepository(ServerLocation);
  DI.serverTypeRepo = DI.em.getRepository(ServerType);

  app.use((req, res, next) => RequestContext.create(DI.orm.em, next));

  const migrator = DI.orm.getMigrator();
  await migrator.up(); // runs migrations up to the latest
  DI.em.flush();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  app.use('/api/calendar', calendarRouter);

  app.use('/api/rfcs', createRouter<Rfc>(createService(DI.rfcRepo, ['application'])));
  app.use('/api/brds', createRouter<Brd>(createService(DI.brdRepo, ['application'])));
  app.use('/api/contacts', createRouter<Contact>(createService(DI.fqdnRepo)));
  app.use('/api/fqdns', createRouter<Fqdn>(createService(DI.fqdnRepo, ['applications', 'server'])));
  app.use(
    '/api/applications',
    createRouter<Application>(createService(DI.applicationRepo, ['fqdns', 'servers', 'servers.operatingSystem', 'servers.location', 'brds', 'rfcs']))
  );
  app.use('/api/servers', createRouter<Server>(createService(DI.serverRepo, ['fqdns', 'applications', 'types', 'location', 'operatingSystem'])));
  app.use('/api/operatingsystems', createRouter<OperatingSystem>(createService(DI.operatingSystemRepo)));
  app.use('/api/serverlocations', createRouter<ServerLocation>(createService(DI.serverLocationRepo)));
  app.use('/api/servertypes', createRouter<ServerType>(createService(DI.serverTypeRepo)));
  app.use(errorHandler);
  app.use(notFoundHandler);

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
})();
