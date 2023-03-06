import { HttpCode } from '../common/enums';
import { AppError } from '.';

export class UnprocessableEntity extends AppError {
  constructor(message: string, details?: unknown) {
    super(HttpCode.UNPROCESSABLE_ENTITY, message, details);
  }
}
