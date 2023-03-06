import { HttpCode } from '../common/enums';

export class AppError extends Error {
  statusCode: HttpCode;
  details: unknown | undefined;

  constructor(statusCode: HttpCode, message: string, details?: unknown) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = Error.name;
    this.statusCode = statusCode;
    this.details = details;
    Error.captureStackTrace(this);
  }
}
