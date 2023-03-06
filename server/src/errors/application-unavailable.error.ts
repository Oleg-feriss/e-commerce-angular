import { AppError } from './app.error';
import { HttpCode } from '../common/enums';

export class ApplicationUnavailableError extends AppError {
  constructor(message: string, details?: unknown) {
    super(HttpCode.INTERNAL_SERVER_ERROR, message, details);
  }
}
