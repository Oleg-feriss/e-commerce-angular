import { NextFunction, Request, Response } from 'express';

import { HttpCode, ExceptionMessage } from '../common/enums';
import {
  User,
  UserSignUpRequest,
  UserGetByIdRequest,
  UserGetByEmailRequest,
} from '../interfaces';
import { userService } from '../services';

export class UserController {
  async getAllUsers(
    _: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const users = await userService.getAll();
      res.send(users).status(HttpCode.OK);
    } catch (error) {
      next(error);
    }
  }

  async createUser(
    req: Request<
      Record<string, never>,
      Record<string, never>,
      UserSignUpRequest
    >,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const newUser = await userService.create(req.body);
      res.send(newUser).status(HttpCode.CREATED);
    } catch (error) {
      next(error);
    }
  }

  async getUserByEmail(
    req: Request<UserGetByEmailRequest>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { email } = req.params;
      const userExists = await userService.getByEmail(email);

      res.send(userExists).status(HttpCode.OK);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(
    req: Request<UserGetByIdRequest, Record<string, never>, User>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { id } = req.params;
      const user = req.body;
      const updatedUser = await userService.updateUser(id, user);

      res.send(updatedUser).status(HttpCode.OK);
    } catch (error) {
      res
        .send({ message: ExceptionMessage.WRONG_PARAMETERS })
        .status(HttpCode.INTERNAL_SERVER_ERROR);

      next(error);
    }
  }
}
