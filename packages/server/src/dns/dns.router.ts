import express, { Request, Response, Router } from 'express';
import * as DnsService from './dns.service';
import { Dns } from '~/entities';

export const dnsRouter: Router = express.Router({ mergeParams: true });

// GET dns
dnsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const dns: Dns[] = await DnsService.findAll();

    res.status(200).send(dns);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET dns/:dnsId
dnsRouter.get('/:dnsId', async (req: Request, res: Response) => {
  try {
    const dnsId = parseInt(req.params.dnsId);
    const dns = await DnsService.find(dnsId);

    if (dns) {
      return res.status(200).send(dns);
    }

    res.status(404).send('dns not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST dns
dnsRouter.post('/', async (req: Request, res: Response) => {
  try {
    const dns: Dns = req.body;
    const newItem = await DnsService.create(dns);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT dns/:dnsId
dnsRouter.put('/:dnsId', async (req: Request, res: Response) => {
  try {
    const dnsId = parseInt(req.params.dnsId);
    const dnsUpdate: Dns = req.body;
    const existingItem = await DnsService.find(dnsId);

    if (existingItem) {
      const updatedItem = await DnsService.update(dnsId, dnsUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await DnsService.create(dnsUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE dns/:dnsId
dnsRouter.delete('/:dnsId', async (req: Request, res: Response) => {
  try {
    const dnsId = parseInt(req.params.dnsId);
    await DnsService.remove(dnsId);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
