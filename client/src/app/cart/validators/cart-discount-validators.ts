import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { VOUCHER_CODES } from '../constants/voucher-codes.constant';

@Injectable({
  providedIn: 'root',
})
export class CartDiscountValidators {
  public getCheckForVoucherValidityValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const isValidVoucher = VOUCHER_CODES.find(code => code.label === value);

      return value && isValidVoucher ? null : { invalidCode: true };
    };
  }
}
