import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

import { ApplicationUnavailableError, BadRequestError } from '../../errors';
import { ExceptionMessage } from '../../common/enums';

class Validator {
  validate<T>(schema: Joi.ObjectSchema<T>) {
    return async (
      req: Request<unknown>,
      _res: Response,
      next: NextFunction,
    ): Promise<void> => {
      try {
        await schema.validateAsync(req.body);

        next();
      } catch (error) {
        if (error instanceof Joi.ValidationError) {
          next(
            new BadRequestError(
              ExceptionMessage.VALIDATION_FAILED,
              error.details,
            ),
          );
          return;
        }

        next(
          new ApplicationUnavailableError(ExceptionMessage.APPLICATION_ERROR),
        );
      }
    };
  }
}

export default new Validator();
