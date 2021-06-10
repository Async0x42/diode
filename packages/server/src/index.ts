import fastify from 'fastify';
import fastifyExpress from 'fastify-express';
// import cors from 'fastify-cors';
import helmet from 'fastify-helmet';
import dotEnvExtended from 'dotenv-extended';
import { EntityManager, EntityRepository, MikroORM, RequestContext } from '@mikro-orm/core';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/not-found.middleware';
import config from './mikro-orm.config';
import {
  OperatingSystem,
  ServerLocation,
  ServerType,
  Application,
  Brd,
  Calendar,
  CalendarItem,
  Contact,
  Environment,
  Fqdn,
  Network,
  Rfc,
  Server,
  Ticket,
  SslCertificate,
  ContactGroup,
  PhysicalServer,
} from './entities';
import { createRouter, createService } from './utils';
import { calendarRouter } from './calendar/calendar.router';
import { backupDatabase, createSchedules } from './scheduler';
export * from './entities';

dotEnvExtended.load();

const port: number = parseInt(process.env.PORT as string, 10) || 3000;
const app = fastify({
  logger: true,
});
app.register(fastifyExpress);

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
  physicalServerRepo: EntityRepository<PhysicalServer>;
  contactGroupRepo: EntityRepository<ContactGroup>;
  sslCertificateRepo: EntityRepository<SslCertificate>;
  environmentRepo: EntityRepository<Environment>;
  networkRepo: EntityRepository<Network>;
  ticketRepo: EntityRepository<Ticket>;
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
  DI.physicalServerRepo = DI.em.getRepository(PhysicalServer);
  DI.contactGroupRepo = DI.em.getRepository(ContactGroup);
  DI.sslCertificateRepo = DI.em.getRepository(SslCertificate);
  DI.environmentRepo = DI.em.getRepository(Environment);
  DI.networkRepo = DI.em.getRepository(Network);
  DI.ticketRepo = DI.em.getRepository(Ticket);

  app.use((req, res, next) => RequestContext.create(DI.orm.em, next));

  const migrator = DI.orm.getMigrator();
  const pendingMigrations = await migrator.getPendingMigrations();

  if (pendingMigrations.length > 0) {
    await backupDatabase();
    await migrator.up(); // runs migrations up to the latest
  }
  DI.em.flush();

  app.register(
    helmet,
    // enable csp nonces generation with default content-security-policy option
    { enableCSPNonces: true }
  );
  // TODO: maybe not needed
  // app.register(cors);

  app.use('/api/calendar', calendarRouter);

  app.register(createRouter<Rfc>(app, createService(DI.rfcRepo, ['application'])), { prefix: '/api/rfcs' });
  app.register(createRouter<Brd>(app, createService(DI.brdRepo, ['application'])), { prefix: '/api/brds' });
  app.register(createRouter<Contact>(app, createService(DI.contactRepo, ['contactGroups', 'tickets'])), { prefix: '/api/contacts' });
  app.register(createRouter<Fqdn>(app, createService(DI.fqdnRepo, ['applications', 'server'])), { prefix: '/api/fqdns' });
  app.register(createRouter<Ticket>(app, createService(DI.ticketRepo, ['applications', 'servers', 'owners'])), { prefix: '/api/tickets' });
  app.register(
    createRouter<PhysicalServer>(app, createService(DI.physicalServerRepo, ['location', 'servers', 'servers.location', 'servers.operatingSystem'])),
    { prefix: '/api/physicalServers' }
  );
  app.register(
    createRouter<Application>(
      app,
      createService(DI.applicationRepo, [
        'sslCertificates',
        'fqdns',
        'servers',
        'servers.operatingSystem',
        'servers.location',
        'brds',
        'rfcs',
        'tickets',
      ])
    ),
    { prefix: '/api/applications' }
  );
  app.register(
    createRouter<Server>(
      app,
      createService(DI.serverRepo, [
        'sslCertificates',
        'fqdns',
        'applications',
        'types',
        'location',
        'operatingSystem',
        'physicalServer',
        'network',
        'environment',
        'tickets',
      ])
    ),
    { prefix: '/api/servers' }
  );
  app.register(createRouter<OperatingSystem>(app, createService(DI.operatingSystemRepo)), { prefix: '/api/operatingsystems' });
  app.register(createRouter<ServerLocation>(app, createService(DI.serverLocationRepo)), { prefix: '/api/serverlocations' });
  app.register(createRouter<ServerType>(app, createService(DI.serverTypeRepo)), { prefix: '/api/servertypes' });
  app.register(createRouter<Environment>(app, createService(DI.environmentRepo)), { prefix: '/api/environments' });
  app.register(createRouter<Network>(app, createService(DI.networkRepo)), { prefix: '/api/networks' });
  app.register(createRouter<ContactGroup>(app, createService(DI.contactGroupRepo, ['contacts'])), { prefix: '/api/contactGroups' });
  app.register(createRouter<SslCertificate>(app, createService(DI.sslCertificateRepo, ['applications', 'servers'])), {
    prefix: '/api/sslCertificates',
  });
  app.use(errorHandler);
  app.use(notFoundHandler);

  createSchedules();

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
})();
