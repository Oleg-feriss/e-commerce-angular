import { InputField } from '@shared/models';

export const CHANGE_NAME_FORM_FIELDS: InputField[] = [
  {
    name: 'name',
    type: 'text',
    errorType: 'pattern',
    placeholder: 'Ex. Jon',
    label: 'First Name',
    icon: '',
  },
  {
    name: 'surname',
    type: 'text',
    errorType: 'pattern',
    placeholder: 'Ex. Snow',
    label: 'Last Name',
    icon: '',
  },
];
