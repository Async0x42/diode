import path from 'path';
import express, { Request, Response, Router } from 'express';
import { backupDatabase } from '../scheduler';

export const sqlRouter: Router = express.Router();

// GET calendar
sqlRouter.get('/', async (req: Request, res: Response) => {
  try {
    const backupFile = await backupDatabase('_download', './tmp_downloads');
    const backupFilePath = path.join(__dirname, '../../', backupFile.filePath, backupFile.fileName);

    res.status(200).download(backupFilePath, backupFile.fileName);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
