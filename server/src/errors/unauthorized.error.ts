import { AppError } from './app.error';
import { HttpCode } from '../common/enums';

export class UnauthorizedError extends AppError {
  constructor(message: string, details?: unknown) {
    super(HttpCode.UNAUTHORIZED, message, details);
  }
}
