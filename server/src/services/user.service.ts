import {
  UnprocessableEntity,
  UnauthorizedError,
  BadRequestError,
} from '../errors';
import { userRepository } from '../data/repositories';
import {
  User,
  UserSignInRequest,
  UserSignInResponse,
  UserSignUpRequest,
  UserSignUpResponse,
} from '../interfaces';
import { encryptService, tokenService } from '.';
import { ExceptionMessage } from '../common/enums';

export class UserService {
  private async login(id: string): Promise<UserSignUpResponse> {
    const user = await userRepository.findById(id);

    if (!user) {
      throw new BadRequestError(ExceptionMessage.USER_NOT_FOUND);
    }

    return { user, token: tokenService.create({ userId: id }) };
  }

  public async create(user: UserSignUpRequest): Promise<UserSignUpResponse> {
    const { name, surname, email } = user;

    const userWithCurrentEmail = await userRepository.getByEmail(email);

    if (userWithCurrentEmail) {
      throw new UnprocessableEntity(ExceptionMessage.EMAIL_EXISTS);
    }

    const passwordSalt = await encryptService.createSalt();
    const passwordHash = await encryptService.createHash(
      user.password,
      passwordSalt,
    );

    const { id } = await userRepository.createUser({
      name,
      surname,
      email,
      passwordHash,
    });

    return this.login(id as string);
  }

  public async verifyLoginCredentials(
    verifyData: UserSignInRequest,
  ): Promise<UserSignInResponse> {
    const user = await userRepository.getByEmail(verifyData.email);

    if (!user) {
      throw new UnauthorizedError(ExceptionMessage.INCORRECT_EMAIL);
    }

    const isEqualPassword = await encryptService.compare(
      verifyData.password,
      user.passwordHash,
    );

    if (!isEqualPassword) {
      throw new UnauthorizedError(ExceptionMessage.INCORRECT_PASSWORD);
    }

    return this.login(user.id as string);
  }

  public async getByEmail(email: string): Promise<boolean> {
    const userWithCurrentEmail = await userRepository.getByEmail(email);
    return Boolean(userWithCurrentEmail && userWithCurrentEmail.id);
  }

  public async getUserById(userId: string): Promise<UserSignInResponse> {
    return this.login(userId);
  }

  public async getAll(): Promise<User[]> {
    return await userRepository.findAll();
  }

  public async updateUser(id: string, user: User): Promise<User | null> {
    const { email, phoneNumber } = user;
    const isEmailUsed = Boolean(await userRepository.getByEmail(email));
    const isPhoneNumberUsed = phoneNumber
      ? Boolean(await userRepository.getByPhone(phoneNumber))
      : false;

    if (isEmailUsed) {
      throw new UnprocessableEntity(ExceptionMessage.EMAIL_EXISTS);
    }

    if (isPhoneNumberUsed) {
      throw new UnprocessableEntity(ExceptionMessage.PHONE_NUMBER_EXISTS);
    }

    return await userRepository.updateUser(id, user);
  }
}
