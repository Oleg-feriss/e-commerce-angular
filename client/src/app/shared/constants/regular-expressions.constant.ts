export const ONLY_LETTERS_REGEX = /[a-zA-Z]*/;
export const ONLY_SPECIAL_CHARACTERS_REGEX = /[ `#?!@$%^&*-]/;
export const ONLY_DIGITS_REGEX = /(?=.*?[0-9])/;
export const PASSWORD_MINIMUM_LENGTH_REGEX = /.{8,}/;
export const CORRECT_PASSWORD_REGEX = /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
