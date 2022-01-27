import { Controller, BodyParams, Inject, Post, Get, PathParams, Res } from '@tsed/common';
import { FqdnService } from '../services';
import { Fqdn } from '../entities';
import { Transactional } from '@tsed/mikro-orm';
import { Any, Delete, Put } from '@tsed/schema';

const columnsToPopulate = ['applications', 'server', 'server.environment', 'server.location', 'server.operatingSystem', 'server.types'];

@Controller('/fqdn')
export class FqdnController {
  @Inject()
  private service!: FqdnService;

  @Get('/')
  async getList(): Promise<Fqdn[]> {
    return this.service.findAll({}, { populate: columnsToPopulate });
  }

  @Get('/:id')
  async get(@PathParams('id') id: string, @Res() res: Res): Promise<Fqdn | undefined> {
    try {
      const itemId = parseInt(id);
      const item = await this.service.find(itemId, { populate: columnsToPopulate });

      if (item) {
        return item;
      }

      res.status(404).send('item not found');
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }

  @Post('/')
  @Transactional({ retry: true })
  create(@BodyParams() user: Fqdn): Promise<Fqdn> {
    return this.service.create(user);
  }

  @Put('/:id')
  async update(@PathParams('id') id: string, @Res() res: Res, @BodyParams() @Any() payload: any): Promise<Fqdn | null | undefined> {
    try {
      const itemId = parseInt(id);
      const existingItem = await this.service.find(itemId, { populate: columnsToPopulate });

      if (!existingItem) {
        res.status(404).send('item not found');
      }

      const updatedItem = await this.service.update(itemId, payload);
      return updatedItem;
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }

  @Delete('/:id')
  async delete(@PathParams('id') id: string, @Res() res: Res) {
    try {
      const itemId = parseInt(id);
      await this.service.remove(itemId);

      res.sendStatus(204);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
}
