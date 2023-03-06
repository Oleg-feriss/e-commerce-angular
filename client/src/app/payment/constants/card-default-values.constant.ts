import { Card } from '../models';

export const CARD_DEFAULT_VALUES: Card = {
  cardNumber: '',
  expirationDate: '',
  securityCode: '',
  cardHolder: '',
};

export const MAX_CARD_LENGTH = 16 as const;
