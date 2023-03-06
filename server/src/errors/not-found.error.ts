import { AppError } from './app.error';
import { HttpCode } from '../common/enums';

export class NotFoundError extends AppError {
  constructor(message: string, details?: unknown) {
    super(HttpCode.NOT_FOUND, message, details);
  }
}
