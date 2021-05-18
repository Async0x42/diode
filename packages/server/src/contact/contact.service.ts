import { orm } from '..';
import { Contact } from '../entities';

export const findAll = async (): Promise<Contact[]> => orm.em.find(Contact, {}) || [];

export const find = async (id: number): Promise<Contact | null> => orm.em.findOneOrFail(Contact, { id });

export const create = async (newContact: Contact): Promise<Contact> => {
  const createdContact = orm.em.create(Contact, {
    ...newContact,
  });

  return createdContact;
};

export const update = async (id: number, contactUpdate: Contact): Promise<Contact | null> => {
  const foundContact = await orm.em.findOneOrFail(Contact, { id });

  if (!foundContact) {
    return null;
  }

  const updatedContact = await orm.em.assign(foundContact, {
    ...contactUpdate,
  });

  return updatedContact;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundContact = await orm.em.findOneOrFail(Contact, { id });

  if (!foundContact) {
    return null;
  }

  orm.em.remove(foundContact);
};
