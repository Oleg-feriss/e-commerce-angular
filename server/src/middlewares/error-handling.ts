import { NextFunction, Request, Response } from 'express';

import { AppError } from '../errors';
import { HttpCode, ExceptionMessage } from '../common/enums';

const errorResponder = (
  error: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  res.header('Content-Type', 'application/json');

  const status = error.statusCode || 400;

  res.status(status).send({
    details: error.details ?? undefined,
    message: error.message,
  });
};

const invalidPathHandler = (
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  res.status(HttpCode.NOT_FOUND);
  res.send(ExceptionMessage.PAGE_NOT_FOUND);
};

export { errorResponder, invalidPathHandler };
