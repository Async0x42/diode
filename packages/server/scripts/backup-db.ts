import fs from 'fs';

const backupFile = 'diode.db';
const backupDir = './backups';

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, {
    recursive: true,
  });
}

try {
  fs.copyFileSync(backupFile, `${backupDir}/${backupFile}-${new Date().getTime().toString()}`);
  console.log('diode.db was copied to backups/diode.db');
} catch {
  console.log('The file could not be copied');
}
