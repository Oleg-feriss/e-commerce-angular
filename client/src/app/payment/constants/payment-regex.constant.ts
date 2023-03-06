export const PAYMENT_FORM_REGEX = {
  ONLY_NUMBERS: /^[\d\s]+$/,
  EXPIRATION_DATE: /^(0[1-9]|1[0-2])\/?(2[3-9]|3[0-9])$/,
  SECURITY_CODE: /^[0-9]{3,4}$/,
  CARD_HOLDER_CHARACTERS: /^[a-z ,.'-]+$/i,
  CARD_HOLDER_LENGTH: /.{2,}/,
} as const;

export const FORMAT_CARD_NUMBER_REGEX = /(\d{4})/g;
export const NO_SPACES_REGEX = /\s+/g;
export const FORMAT_CARD_SAVE_REGEX = /(\d{2})/;
export const NO_SLASH_REGEX = /[\/]/;
export const TRIM_SLASH_REGEX = /[\/]$/;
