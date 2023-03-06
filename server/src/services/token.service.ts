import jwt, { Secret } from 'jsonwebtoken';

import { TokenPayload } from '../interfaces';
import config from 'config';

export class TokenService {
  public create = (data: TokenPayload): string => {
    return jwt.sign(data, <Secret>config.get('jwtSecret'), {
      expiresIn: config.get('jwtExpiration'),
    });
  };

  public decode = <T>(token: string): T => {
    return jwt.decode(token) as T;
  };
}
