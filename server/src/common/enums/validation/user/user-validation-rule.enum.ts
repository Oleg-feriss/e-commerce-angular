export const userValidationRule = {
  EMAIL_LOCAL_PART_FIRST_CHARTER: /^[a-zA-Z0-9].+$/,
  EMAIL_LOCAL_PART_LAST_CHARTER: /[a-zA-Z0-9]@/,
  EMAIL_PATTERN: /^[a-zA-Z0-9\-.@!#$%&'*+-/=?^_`|]+$/,
  ONLY_LATIN_LETTERS_PATTERN: /^[a-zA-Z]+$/,
  PASSWORD_PATTERN:
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$_!%*#?&])[A-Za-z\d@$_!%*#?&]{8,}$/,
  PASSWORD_SPACE: /^\S+$/,
  PHONE_NUMBER_PATTERN: /^\+(?:[0-9] ?){6,14}[0-9]$/,
} as const;
