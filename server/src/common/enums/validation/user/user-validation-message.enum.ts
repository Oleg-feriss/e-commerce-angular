export const userValidationMessage = {
  NAME_REQUIRE: 'Name is required',
  SURNAME_REQUIRE: 'Surname is required',
  GENDER_REQUIRE: 'Gender is required',
  MAIL_REQUIRE: 'Mail address is required',
  PASSWORD_REQUIRE: 'Password is required',
  PHONE_NUMBER_REQUIRE: 'Phone number is required',
  EMAIL_NOT_VALID: 'The email format is not valid',
  NAME_PATTERN: 'Name can contain only latin letters',
  SURNAME_PATTERN: 'Surname can contain only latin letters',
  PASSWORD_PATTERN:
    'Password must contain minimum eight characters, at least one letter, one number and one special character',
  PASSWORD_SPACE: 'Spaces are not allowed in a password',
  PHONE_NUMBER_PATTERN:
    'The numbers should start with a plus sign, followed by the country code and national number',
  PHOTO_REQUIRE: 'Profile photo is required',
  ADDRESS_REQUIRE: 'Address is required',
  DATE_FORMAT: 'Date format is YYYY-MM-DD',
  DATE_MAX: `Your birthday should be sooner than ${new Date().getFullYear()} year`,
} as const;
