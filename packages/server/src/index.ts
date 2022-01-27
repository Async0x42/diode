import { $log } from '@tsed/common';
import { PlatformExpress } from '@tsed/platform-express';
import { Server } from './Server';
import dotEnvExtended from 'dotenv-extended';
import './exponentialBackoff';
import { backupDatabase, createSchedules } from './scheduler';

dotEnvExtended.load();

async function bootstrap() {
  try {
    $log.debug('Start server...');
    const platform = await PlatformExpress.bootstrap(Server);

    console.log(`beginning to listen on ${platform.settings.httpPort}`);
    await platform.listen();
    $log.debug('Server initialized');
  } catch (er) {
    $log.error(er);
  }
}

//   const migrator = DI.orm.getMigrator();
//   const pendingMigrations = await migrator.getPendingMigrations();

//   if (pendingMigrations.length > 0) {
//     await backupDatabase('_migration');
//     await migrator.up(); // runs migrations up to the latest
//   DI.em.flush();
//   }

//   app.use(errorHandler);
//   app.use(notFoundHandler);

bootstrap();
createSchedules();
