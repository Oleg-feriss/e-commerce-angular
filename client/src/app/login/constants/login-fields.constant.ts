import { InputField } from '@shared/models';

export const SIGN_IN_FORM_FIELDS: InputField[] = [
  {
    name: 'email',
    type: 'email',
    errorType: 'email',
    placeholder: 'Ex. jsnow@got.com',
    label: 'Your e-mail',
    icon: 'mail',
  },
  {
    name: 'password',
    type: 'password',
    errorType: 'password',
    placeholder: '********',
    label: 'Password',
    icon: 'lock',
  },
];
