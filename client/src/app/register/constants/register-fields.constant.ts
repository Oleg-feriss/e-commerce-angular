import { InputField } from '@shared/models';

export const SIGN_UP_FORM_FIELDS: InputField[] = [
  {
    name: 'name',
    type: 'text',
    errorType: 'pattern',
    placeholder: 'Ex. Jon',
    label: 'Name',
    icon: 'person',
  },
  {
    name: 'surname',
    type: 'text',
    errorType: 'pattern',
    placeholder: 'Ex. Snow',
    label: 'Surname',
    icon: 'person',
  },
  {
    name: 'email',
    type: 'email',
    errorType: 'email',
    placeholder: 'Ex. jsnow@got.com',
    label: 'Your e-mail',
    icon: 'mail',
    customErrors: {
      emailExists: 'Email already exists',
    },
  },
  {
    name: 'password',
    type: 'password',
    errorType: 'password',
    placeholder: '********',
    label: 'Password',
    icon: 'lock',
    customErrors: {
      onlyDigits:
        'Provided password must have also at least one special character and be at least 8 characters long',
      onlySpecialCharacters:
        'Provided password must have also at least one digit and be at least 8 characters long',
      onlyLength:
        'Provided password must have also at least one special character and one digit',
      digitsAndSpecialCharacters:
        'Provided password must be at least 8 characters long',
      digitsAndLength:
        'Provided password must have also at least one special character',
      specialCharactersAndLength:
        'Provided password must have at least one digit',
      default:
        'Provided password must have at least one digit, one special character and be at least 8 characters long',
    },
  },
  {
    name: 'confirmPassword',
    type: 'password',
    errorType: 'password',
    placeholder: '********',
    label: 'Confirm Password',
    icon: 'lock',
    customErrors: {
      mismatch: "Passwords don't match.",
    },
  },
];
