import { Router } from 'express';

import { userController } from '../../controllers';
import Validator from '../../middlewares/validation/validator';
import {
  UserSignUpSchema,
  UserInformationUpdateSchema,
} from '../../middlewares/validation/user/';

export const userRouter: Router = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.post(
  '/sign-up',
  Validator.validate(UserSignUpSchema),
  userController.createUser,
);
userRouter.get('/:email', userController.getUserByEmail);
userRouter.put(
  '/:id',
  Validator.validate(UserInformationUpdateSchema),
  userController.updateUser,
);
