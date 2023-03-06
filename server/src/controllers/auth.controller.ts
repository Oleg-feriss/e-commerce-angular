import { NextFunction, Request, Response } from 'express';

import { authService } from '../services';
import { HttpCode } from '../common/enums';
import { UserSignInRequest } from '../interfaces';

export class AuthController {
  public async getCurrentUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const [, token] = req.headers?.authorization?.split(' ') ?? [];
      const user = await authService.getCurrentUser(token);

      res.send(user).status(HttpCode.OK);
    } catch (error) {
      next(error);
    }
  }

  public async getUser(
    req: Request<
      Record<string, never>,
      Record<string, never>,
      UserSignInRequest
    >,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const signInUserPayload = await authService.getUser(req.body);
      res.send(signInUserPayload).status(HttpCode.OK);
    } catch (error) {
      next(error);
    }
  }
}
