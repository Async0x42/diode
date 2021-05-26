import fs from 'fs';

const backupFile = 'diode.db';
const backupDir = './backups';
const backedUpFile = `${backupFile}-${new Date().getTime().toString()}`;

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, {
    recursive: true,
  });
}

try {
  fs.copyFileSync(backupFile, `${backupDir}/${backedUpFile}`);
  console.log(`${backupFile} was copied to ${backupDir}/${backedUpFile}`);
} catch {
  console.log('The file could not be copied');
}
