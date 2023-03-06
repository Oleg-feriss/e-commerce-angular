import { User } from '.';

export interface UserSignInResponse {
  user: User;
  token: string;
}
