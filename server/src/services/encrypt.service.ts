import { hash, genSalt, compare } from 'bcryptjs';
import config from 'config';

export class EncryptService {
  public createSalt = (): Promise<string> => {
    return genSalt(config.get('passwordSaltRounds'));
  };

  public createHash = (data: string, salt: string): Promise<string> => {
    return hash(data, salt);
  };

  public compare = async (
    data: string,
    passwordHash: string,
  ): Promise<boolean> => {
    return compare(data, passwordHash);
  };
}
