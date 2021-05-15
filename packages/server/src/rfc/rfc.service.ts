import { RfcAddModel, RfcViewModel } from '@daiod/common';
import { Rfc } from '~/database/models';

export const findAll = async (): Promise<RfcViewModel[]> => Rfc.findAll() || [];

export const find = async (id: number): Promise<RfcViewModel | null> => Rfc.findByPk(id);

export const create = async (newRfc: RfcAddModel): Promise<RfcViewModel> => {
  const createdRfc = Rfc.create({
    ...newRfc,
  });

  return createdRfc;
};

export const update = async (id: number, rfcUpdate: RfcAddModel): Promise<RfcViewModel | null> => {
  const foundRfc = await Rfc.findByPk(id);

  if (!foundRfc) {
    return null;
  }

  const updatedRfc = await foundRfc.update({
    ...rfcUpdate,
  });

  return updatedRfc;
};

export const remove = async (id: number): Promise<null | void> => {
  const foundRfc = await Rfc.findByPk(id);

  if (!foundRfc) {
    return null;
  }

  foundRfc.destroy();
};
