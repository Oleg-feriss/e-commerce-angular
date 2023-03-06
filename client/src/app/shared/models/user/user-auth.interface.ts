import { User } from '.';

export interface UserAuth {
  token: string;
  user: User;
}
