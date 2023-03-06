export const ExceptionMessage = {
  EMAIL_EXISTS: 'User with this email already exists.',
  PHONE_NUMBER_EXISTS: 'User with this phone number already exists.',
  PAGE_NOT_FOUND: 'Page not found.',
  USER_NOT_FOUND: 'User not found.',
  APPLICATION_ERROR: 'Something went wrong with application.',
  VALIDATION_FAILED: 'Validation failed.',
  INCORRECT_EMAIL:
    'Account with that email does not exist. Try again or create a new account.',
  INCORRECT_PASSWORD: 'Your password is incorrect. Please try again.',
  INVALID_TOKEN: 'Token is invalid.',
  WRONG_PARAMETERS: 'Wrong parameters were passed',
} as const;
