import * as Joi from 'joi';

import {
  userValidationMessage,
  userValidationRule,
} from '../../../common/enums';
import { UserSignInValidation } from '../../../interfaces';

export const UserSignInSchema: Joi.ObjectSchema<UserSignInValidation> =
  Joi.object({
    email: Joi.string()
      .trim()
      .ruleset.email({ tlds: { allow: false } })
      .regex(userValidationRule.EMAIL_LOCAL_PART_FIRST_CHARTER)
      .regex(userValidationRule.EMAIL_LOCAL_PART_LAST_CHARTER)
      .regex(userValidationRule.EMAIL_PATTERN)
      .rule({ message: userValidationMessage.EMAIL_NOT_VALID })
      .required()
      .messages({
        'string.empty': userValidationMessage.MAIL_REQUIRE,
      }),
    password: Joi.string()
      .trim()
      .regex(userValidationRule.PASSWORD_PATTERN)
      .ruleset.regex(userValidationRule.PASSWORD_SPACE)
      .rule({ message: userValidationMessage.PASSWORD_SPACE })
      .required()
      .messages({
        'string.empty': userValidationMessage.PASSWORD_REQUIRE,
        'string.pattern.base': userValidationMessage.PASSWORD_PATTERN,
      }),
  });
