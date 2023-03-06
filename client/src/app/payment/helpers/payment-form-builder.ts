import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CardAddComponent } from '../components/card-add/card-add.component';
import { Card } from '../models';
import { PaymentFormValidators } from '../validators/payment-form.validators';

export class PaymentFormBuilder {
  public static getPaymentForm(
    paymentFormValidators: PaymentFormValidators,
    card: Card,
    route: ActivatedRoute
  ): FormGroup {
    const { cardNumber, expirationDate, securityCode, cardHolder } = card;
    const {
      getCardNumberUniquenessValidator,
      getCardNumberLengthValidator,
      getCardNumberDigitsValidator,
      getCardExpirationDateValidator,
      getCardSecurityCodeValidator,
      getCardHolderCharactersValidator,
      getCardHolderLengthValidator,
    } = paymentFormValidators;

    return new FormGroup({
      cardNumber: new FormControl(
        cardNumber,
        route.component === CardAddComponent
          ? [
              Validators.required,
              getCardNumberUniquenessValidator,
              getCardNumberLengthValidator,
              getCardNumberDigitsValidator,
            ]
          : [
              Validators.required,
              getCardNumberLengthValidator,
              getCardNumberDigitsValidator,
            ]
      ),
      expirationDate: new FormControl(expirationDate, [
        Validators.required,
        getCardExpirationDateValidator,
      ]),
      securityCode: new FormControl(securityCode, [
        Validators.required,
        getCardSecurityCodeValidator,
      ]),
      cardHolder: new FormControl(cardHolder, [
        Validators.required,
        getCardHolderCharactersValidator,
        getCardHolderLengthValidator,
      ]),
    });
  }
}
