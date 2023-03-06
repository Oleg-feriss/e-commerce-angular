import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartDiscountValidators } from '../validators/cart-discount-validators';

export class CartDiscountFormBuilder {
  public static getDefaultForm(
    cartDiscountValidators: CartDiscountValidators
  ): FormGroup {
    return new FormGroup({
      discount: new FormControl('', {
        validators: [
          cartDiscountValidators.getCheckForVoucherValidityValidator(),
        ],
        updateOn: 'submit',
      }),
    });
  }
}
