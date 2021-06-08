import fs from 'fs';
import cron from 'node-cron';
import { format } from 'date-fns';
import mysqldump from 'mysqldump';

async function createDirIfNotExist(dir: string) {
  try {
    await fs.promises.access(dir, fs.constants.F_OK);
  } catch (e) {
    await fs.promises.mkdir(dir);
  }
}

export const backupDatabase = async () => {
  const backupPath = '../../backups';
  await createDirIfNotExist(backupPath);

  const fileName = `${process.env.MIKRO_ORM_DB_NAME}_${format(new Date(), 'yyyy-MM-dd-HHmmss')}.sql`;
  mysqldump({
    connection: {
      host: process.env.MIKRO_ORM_HOST || 'localhost',
      port: parseInt(process.env.MIKRO_ORM_PORT || '3306'),
      user: process.env.MIKRO_ORM_USER || 'diode',
      password: process.env.MIKRO_ORM_PASSWORD || 'diodepassword',
      database: process.env.MIKRO_ORM_DB_NAME || 'diode',
    },
    dump: {
      data: {
        lockTables: true,
      },
      schema: {
        table: {
          dropIfExist: true,
        },
      },
    },
    dumpToFile: `${backupPath}/${fileName}`,
  });
};

export const createSchedules = () => {
  console.log('creating schedules');

  cron.schedule('0,15,30,45 * * * *', async () => {
    console.log('---------------------');
    console.log('Running Database Backup Cron Job');
    await backupDatabase();
  });
};
