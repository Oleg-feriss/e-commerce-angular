export interface User {
  id?: string;
  name: string;
  surname: string;
  gender?: string;
  birthday?: Date;
  phoneNumber?: string;
  email: string;
  passwordHash: string;
  photo?: string;
  addresses?: string[];
}
