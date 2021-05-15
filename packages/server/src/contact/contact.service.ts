import { ContactAddModel, ContactViewModel } from '@daiod/common';
import { Contact } from '~/database/models';

export const findAll = async (): Promise<ContactViewModel[]> => Contact.findAll() || [];

export const find = async (id: number): Promise<ContactViewModel | null> => Contact.findByPk(id);

export const create = async (newContact: ContactAddModel): Promise<ContactViewModel> => {
  const createdContact = Contact.create({
    ...newContact,
  });

  return createdContact;
};

export const update = async (id: number, contactUpdate: ContactAddModel): Promise<ContactViewModel | null> => {
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
