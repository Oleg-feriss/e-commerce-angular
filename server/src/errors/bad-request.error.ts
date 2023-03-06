import { AppError } from './app.error';
import { HttpCode } from '../common/enums';

export class BadRequestError extends AppError {
  constructor(message: string, details?: unknown) {
    super(HttpCode.BAD_REQUEST, message, details);
  }
}
