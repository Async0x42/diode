import { DI } from '../';
import { Contact } from '../entities';

export const findAll = async (): Promise<Contact[]> => (await DI.contactRepo.find({})) || [];

export const find = async (id: number): Promise<Contact | null> => await DI.contactRepo.findOneOrFail({ id });

export const create = async (newContact: Contact): Promise<Contact> => {
  const createdContact = await DI.contactRepo.create({
    ...newContact,
  });
  DI.contactRepo.persist(createdContact);

  return createdContact;
};

export const update = async (id: number, contactUpdate: Contact): Promise<Contact | null> => {
  const foundContact = await DI.contactRepo.findOneOrFail({ id });

  if (!foundContact) {
    return null;
  }

  const updatedContact = await DI.contactRepo.assign(foundContact, {
    ...contactUpdate,
  });

  return updatedContact;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundContact = await DI.contactRepo.findOneOrFail({ id });

  if (!foundContact) {
    return null;
  }

  await DI.contactRepo.remove(foundContact);
};
