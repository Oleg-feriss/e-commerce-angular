import { InputField } from '@shared/models';

export const COUNTRY_FIELD: InputField = {
  name: 'country',
  type: 'text',
  errorType: '',
  placeholder: 'United States',
  label: 'Country or region',
  icon: '',
  customErrors: {
    countryNotExist: 'Please select existing country from the list',
  },
};
