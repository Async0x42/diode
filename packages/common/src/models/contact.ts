import * as Sequelize from 'sequelize';

export interface ContactAddModel {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  position: string;
  organization: string;
  department: string;
  notes: string;
}

export interface ContactModel extends Sequelize.Model<ContactModel, ContactAddModel> {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  position: string;
  organization: string;
  department: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactViewModel {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  position: string;
  organization: string;
  department: string;
  notes: string;
}
