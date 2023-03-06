import { InputField } from '@shared/models';

export const CHANGE_PROFILE_PHOTO_FORM_FIELD: InputField = {
  name: 'image',
  type: 'file',
  errorType: 'pattern',
  placeholder: '',
  label: '',
  icon: '',
  customErrors: {
    invalidSize: 'File size too large (1MB max).',
  },
};
