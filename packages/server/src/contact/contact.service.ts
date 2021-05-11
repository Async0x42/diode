import { v4 as uuidv4 } from 'uuid';

/**
 * Data Model Interfaces
 */

import { BaseContact, Contact, Contacts } from '@daiod/common';

/**
 * In-Memory Store
 */

const contacts: Contacts = {
  '810f136b-f8b1-4967-a665-c7f914b60cc4': {
    id: '810f136b-f8b1-4967-a665-c7f914b60cc4',
    firstName: 'Johnny',
    lastName: 'Jack',
    phoneNumber: '555-555-5555 x3545',
    emailAddress: 'johnny.jack@nil.com',
    position: 'Jumper',
    organization: 'J Org',
    department: 'J Research',
    notes: 'Handles research for J orgs',
  },
  'eb8b63b7-7143-4a14-b24c-37fc9aa862c6': {
    id: 'eb8b63b7-7143-4a14-b24c-37fc9aa862c6',
    firstName: 'Johnny1',
    lastName: 'Jack1',
    phoneNumber: '555-555-5555 x3545',
    emailAddress: 'johnny.jack@nil.com',
    position: 'Jumper',
    organization: 'J Org',
    department: 'J Research',
    notes: 'Handles research for J orgs',
  },
  '0e17f378-0f90-4d8e-a147-ab0383077519': {
    id: '0e17f378-0f90-4d8e-a147-ab0383077519',
    firstName: 'Johnny2',
    lastName: 'Jack2',
    phoneNumber: '555-555-5555 x3545',
    emailAddress: 'johnny.jack@nil.com',
    position: 'Jumper',
    organization: 'J Org',
    department: 'J Research',
    notes: 'Handles research for J orgs',
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Contact[]> => Object.values(contacts) || [];

export const find = async (id: string): Promise<Contact> => contacts[id];

export const create = async (newContact: BaseContact): Promise<Contact> => {
  const id = uuidv4();

  contacts[id] = {
    id,
    ...newContact,
  };

  return contacts[id];
};

export const update = async (id: string, contactUpdate: BaseContact): Promise<Contact | null> => {
  const contact = await find(id);

  if (!contact) {
    return null;
  }

  contacts[id] = { id, ...contactUpdate };

  return contacts[id];
};

export const remove = async (id: string): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete contacts[id];
};
