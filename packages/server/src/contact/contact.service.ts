import { Contact } from '@daiod/common';

export const findAll = async (): Promise<Contact[]> => Contact.findAll() || [];

export const find = async (id: number): Promise<Contact | null> => Contact.findByPk(id);

export const create = async (newContact: Contact): Promise<Contact> => {
  const createdContact = Contact.create({
    ...newContact,
  });

  return createdContact;
};

export const update = async (id: number, contactUpdate: Contact): Promise<Contact | null> => {
  const foundContact = await Contact.findByPk(id);

  if (!foundContact) {
    return null;
  }

  const updatedContact = await foundContact.update({
    ...contactUpdate,
  });

  return updatedContact;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundContact = await Contact.findByPk(id);

  if (!foundContact) {
    return null;
  }

  foundContact.destroy();
};
