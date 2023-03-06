import { InputField } from '@shared/models';

export const CHANGE_PHONE_NUMBER_FORM_FIELDS: InputField[] = [
  {
    name: 'phoneNumber',
    type: 'tel',
    errorType: 'pattern',
    placeholder: '+48 111 222 333',
    label: 'Phone number',
    icon: '',
    customErrors: {
      invalidCharacter: 'Invalid character. Only + and numbers are allowed.',
      minlength: 'Phone number must be at least 8 digits long.',
      maxlength: 'Phone number must be at most 11 digits long.',
    },
  },
];
