import { User } from '..';

export interface UserSignUpResponse {
  user: User;
  token: string;
}
