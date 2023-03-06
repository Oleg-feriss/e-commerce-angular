export const COMMON_ERRORS_LIST: Record<string, string> = {
  required: 'This field is required.',
  email: 'Invalid e-mail address.',
  containsNumber: 'Numbers are not allowed.',
  containsSpecialCharacters: 'Special characters are not allowed.',
  phoneNumberLength: 'Number must contain at least eight digits.',
} as const;
