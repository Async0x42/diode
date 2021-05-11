/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
import { BaseContact, Contact } from '@daiod/common';
import * as ContactService from './contact.service';

/**
 * Router Definition
 */

export const contactRouter = express.Router({ mergeParams: true });

/**
 * Controller Definitions
 */

// GET contacts
contactRouter.get('/', async (req: Request, res: Response) => {
  try {
    const contacts: Contact[] = await ContactService.findAll();

    res.status(200).send(contacts);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET contacts/:contactId
contactRouter.get('/:contactId', async (req: Request, res: Response) => {
  const contactId = req.params.contactId;

  try {
    const contact: Contact = await ContactService.find(contactId);

    if (contact) {
      return res.status(200).send(contact);
    }

    res.status(404).send('contact not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST contacts
contactRouter.post('/', async (req: Request, res: Response) => {
  try {
    const contact: BaseContact = req.body;
    const newItem = await ContactService.create(contact);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT contacts/:contactId
contactRouter.put('/:contactId', async (req: Request, res: Response) => {
  const contactId = req.params.contactId;

  try {
    const contactUpdate: Contact = req.body;
    const existingItem: Contact = await ContactService.find(contactId);

    if (existingItem) {
      const updatedItem = await ContactService.update(contactId, contactUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ContactService.create(contactUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE contacts/:contactId
contactRouter.delete('/:contactId', async (req: Request, res: Response) => {
  try {
    const contactId = req.params.contactId;
    await ContactService.remove(contactId);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
