import { InputField } from '@shared/models';
import { DATE_FORMAT } from '.';

export const CHANGE_BIRTHDAY_FORM_FIELD: InputField = {
  name: 'birthday',
  type: 'text',
  errorType: '',
  placeholder: DATE_FORMAT,
  label: '',
  icon: '',
  customErrors: {
    invalidFormat:
      'Invalid date or date format (Date should follow DD/MM/YYYY format).',
    dateFromFuture: 'Future dates are not allowed.',
    invalidDate: 'Invalid date.',
    tooOldDate: 'Only dates after 1900 are allowed',
  },
};
