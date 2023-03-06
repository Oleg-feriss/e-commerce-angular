import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MAX_CARD_LENGTH, PAYMENT_FORM_REGEX } from '../constants';
import { Card } from '../models';
@Injectable({
  providedIn: 'root',
})
export class PaymentFormValidators {
  public getCardNumberUniquenessValidator(
    control: FormControl
  ): { cardNumberUniqueness: boolean } | null {
    const cards = JSON.parse(<string>localStorage.getItem('cards'));
    return cards === null
      ? null
      : cards.some(
          (card: Card) => card.cardNumber === control.value.split(' ').join('')
        )
      ? { cardNumberUniqueness: true }
      : null;
  }

  public getCardNumberLengthValidator(
    control: FormControl
  ): { cardNumberLength: boolean } | null {
    return control.value.split(' ').join('').length !== MAX_CARD_LENGTH
      ? { cardNumberLength: true }
      : null;
  }

  public getCardNumberDigitsValidator(
    control: FormControl
  ): { cardNumberWithLetters: boolean } | null {
    if (!PAYMENT_FORM_REGEX.ONLY_NUMBERS.test(control.value)) {
      return { cardNumberWithLetters: true };
    }
    return null;
  }

  public getCardExpirationDateValidator(
    control: FormControl
  ): { cardExpirationDate: boolean } | null {
    if (!PAYMENT_FORM_REGEX.EXPIRATION_DATE.test(control.value)) {
      return { cardExpirationDate: true };
    }
    return null;
  }

  public getCardSecurityCodeValidator(
    control: FormControl
  ): { securityCode: boolean } | null {
    if (!PAYMENT_FORM_REGEX.SECURITY_CODE.test(control.value)) {
      return { securityCode: true };
    }
    return null;
  }

  public getCardHolderCharactersValidator(
    control: FormControl
  ): { cardHolderCharacters: boolean } | null {
    if (!PAYMENT_FORM_REGEX.CARD_HOLDER_CHARACTERS.test(control.value)) {
      return { cardHolderCharacters: true };
    }
    return null;
  }

  public getCardHolderLengthValidator(
    control: FormControl
  ): { cardHolderLength: boolean } | null {
    if (!PAYMENT_FORM_REGEX.CARD_HOLDER_LENGTH.test(control.value)) {
      return { cardHolderLength: true };
    }
    return null;
  }
}
