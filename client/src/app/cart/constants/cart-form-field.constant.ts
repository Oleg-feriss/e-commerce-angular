import { InputField } from '@shared/models';

export const CART_DISCOUNT_FORM_FIELD: InputField = {
  name: 'discount',
  type: 'text',
  errorType: '',
  placeholder: 'Provide a voucher code.',
  label: 'Voucher code',
  icon: '',
  customErrors: {
    invalidCode: 'Invalid code.',
  },
};
