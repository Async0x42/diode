import { Controller, BodyParams, Inject, Post, Get, PathParams, Res } from '@tsed/common';
import { backupDatabase } from '../scheduler';
import path from 'path';

@Controller('/getSql')
export class GetSqlController {
  @Get('/')
  async get(@Res() res: Res) {
    try {
      const backupFile = await backupDatabase('_download', './tmp_downloads');
      const backupFilePath = path.join(__dirname, '../../', backupFile.filePath, backupFile.fileName);

      res.status(200).download(backupFilePath, backupFile.fileName);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
}
