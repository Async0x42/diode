import { orm } from '..';
import { Contact } from '../entities';
const contactRepo = orm.em.getRepository(Contact);

export const findAll = async (): Promise<Contact[]> => contactRepo.find({}) || [];

export const find = async (id: number): Promise<Contact | null> => contactRepo.findOneOrFail({ id });

export const create = async (newContact: Contact): Promise<Contact> => {
  const createdContact = contactRepo.create({
    ...newContact,
  });

  return createdContact;
};

export const update = async (id: number, contactUpdate: Contact): Promise<Contact | null> => {
  const foundContact = await contactRepo.findOneOrFail({ id });

  if (!foundContact) {
    return null;
  }

  const updatedContact = await contactRepo.assign(foundContact, {
    ...contactUpdate,
  });

  return updatedContact;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundContact = await contactRepo.findOneOrFail({ id });

  if (!foundContact) {
    return null;
  }

  contactRepo.remove(foundContact);
};
