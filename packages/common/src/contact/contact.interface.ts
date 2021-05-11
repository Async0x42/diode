export interface BaseContact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  position: string;
  organization: string;
  department: string;
  notes: string;
}

export interface Contact extends BaseContact {
  id: string;
}
