import * as Joi from 'joi';

import {
  userValidationMessage,
  userValidationRule,
} from '../../../common/enums';
import { User } from '../../../interfaces';

export const UserInformationUpdateSchema: Joi.ObjectSchema<User> = Joi.object({
  name: Joi.string()
    .trim()
    .regex(userValidationRule.ONLY_LATIN_LETTERS_PATTERN)
    .messages({
      'string.empty': userValidationMessage.NAME_REQUIRE,
      'string.pattern.base': userValidationMessage.NAME_PATTERN,
    }),
  surname: Joi.string()
    .trim()
    .regex(userValidationRule.ONLY_LATIN_LETTERS_PATTERN)
    .messages({
      'string.empty': userValidationMessage.SURNAME_REQUIRE,
      'string.pattern.base': userValidationMessage.SURNAME_PATTERN,
    }),
  email: Joi.string()
    .trim()
    .ruleset.email({ tlds: { allow: false } })
    .regex(userValidationRule.EMAIL_LOCAL_PART_FIRST_CHARTER)
    .regex(userValidationRule.EMAIL_LOCAL_PART_LAST_CHARTER)
    .regex(userValidationRule.EMAIL_PATTERN)
    .rule({ message: userValidationMessage.EMAIL_NOT_VALID })
    .messages({
      'string.empty': userValidationMessage.MAIL_REQUIRE,
    }),
  gender: Joi.string().trim().valid('male', 'female', 'other').messages({
    'string.empty': userValidationMessage.GENDER_REQUIRE,
  }),
  phoneNumber: Joi.string()
    .trim()
    .regex(userValidationRule.PHONE_NUMBER_PATTERN)
    .messages({
      'string.empty': userValidationMessage.PHONE_NUMBER_REQUIRE,
      'string.pattern.base': userValidationMessage.PHONE_NUMBER_PATTERN,
    }),
  photo: Joi.string().trim().messages({
    'string.empty': userValidationMessage.PHOTO_REQUIRE,
  }),
  addresses: Joi.array().items(
    Joi.string().trim().messages({
      'string.empty': userValidationMessage.ADDRESS_REQUIRE,
    }),
  ),
  birthday: Joi.date().max(`01-01-${new Date().getFullYear()}`).iso().messages({
    'date.format': userValidationMessage.DATE_FORMAT,
    'date.max': userValidationMessage.DATE_MAX,
  }),
});
