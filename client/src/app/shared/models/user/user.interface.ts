import { UserAddress } from '.';

export interface User {
  _id: string;
  name: string;
  surname: string;
  gender?: string;
  birthday?: Date;
  phoneNumber?: string;
  email: string;
  passwordHash: string;
  photo?: string;
  addresses?: UserAddress[];
}
