import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { InputField } from '@shared/models';
import { CART_DISCOUNT_FORM_FIELD } from 'app/cart/constants/cart-form-field.constant';
import { VOUCHER_CODES } from 'app/cart/constants/voucher-codes.constant';
import { DEFAULT_VOUCHER } from 'app/cart/constants/voucher.constant';
import { CartDiscountFormBuilder } from 'app/cart/helpers/cart-discount-form-builder';
import { Voucher } from 'app/cart/models';
import { CartDiscountValidators } from 'app/cart/validators/cart-discount-validators';

@Component({
  selector: 'app-voucher-form',
  templateUrl: './voucher-form.component.html',
  styleUrls: ['./voucher-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoucherFormComponent {
  @Output() private submitForm: EventEmitter<Voucher> =
    new EventEmitter<Voucher>();
  public readonly formField: InputField = CART_DISCOUNT_FORM_FIELD;
  public readonly formGroup = CartDiscountFormBuilder.getDefaultForm(
    this.cartDiscountValidators
  );
  public cartReducedTotalPrice: number = 0;
  public activeVoucher: Voucher = DEFAULT_VOUCHER;

  constructor(private cartDiscountValidators: CartDiscountValidators) {}

  public onSubmit(): void {
    if (this.formGroup.valid) {
      const currentCode = VOUCHER_CODES.find(
        code => code.label === this.formGroup.get('discount')?.value
      )!;
      this.activeVoucher = currentCode;
      this.submitForm.emit(this.activeVoucher);
      this.formGroup.get('discount')?.patchValue('');
      this.formGroup.get('discount')?.setErrors(null);
    }
  }
}
