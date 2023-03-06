import { BadRequestError } from '../errors';
import { tokenService, userService } from '.';
import {
  UserSignInRequest,
  UserSignInResponse,
  TokenPayload,
} from '../interfaces';
import { ExceptionMessage } from '../common/enums';

export class AuthService {
  public async getUser(
    userData: UserSignInRequest,
  ): Promise<UserSignInResponse> {
    return userService.verifyLoginCredentials(userData);
  }

  public async getCurrentUser(token: string): Promise<UserSignInResponse> {
    const { userId } = tokenService.decode<TokenPayload>(token);
    const user = await userService.getUserById(userId);

    if (!user) {
      throw new BadRequestError(ExceptionMessage.INVALID_TOKEN);
    }

    return user;
  }
}
