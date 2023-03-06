import { Router } from 'express';

import { authController } from '../../controllers';
import { UserSignInSchema } from '../../middlewares/validation/user';
import Validator from '../../middlewares/validation/validator';

export const authRouter: Router = Router();

authRouter.get('/', authController.getCurrentUser);
authRouter.post(
  '/user',
  Validator.validate(UserSignInSchema),
  authController.getUser,
);
