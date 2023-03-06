import { InputField } from '@shared/models';

export const CHANGE_EMAIL_ADDRESS_FORM_FIELDS: InputField[] = [
  {
    name: 'email',
    type: 'email',
    errorType: 'email',
    placeholder: 'Ex. jsnow@got.com',
    label: 'Your e-mail',
    icon: '',
    customErrors: {
      emailExists: 'Email already exists.',
    },
  },
];
