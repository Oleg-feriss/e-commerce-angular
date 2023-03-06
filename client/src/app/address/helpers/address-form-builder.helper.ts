import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ONLY_LETTERS_REGEX } from '@shared/constants';
import { AddressCustomValidators } from '@shared/validators/address-custom-validators.validator';

export class AddressFormBuilder {
  public static getDefaultForm(
    addressCustomValidators: AddressCustomValidators
  ): FormGroup {
    return new FormGroup({
      country: new FormControl('', {
        validators: [
          Validators.required,
          addressCustomValidators.getCheckForCountryExistenceValidator(),
        ],
      }),
      name: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern(ONLY_LETTERS_REGEX),
          addressCustomValidators.getCheckForNumbersValidator(),
          addressCustomValidators.getCheckForSpecialCharactersValidator(),
        ],
      }),
      surname: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern(ONLY_LETTERS_REGEX),
          addressCustomValidators.getCheckForNumbersValidator(),
          addressCustomValidators.getCheckForSpecialCharactersValidator(),
        ],
      }),
      firstAddress: new FormControl('', {
        validators: [Validators.required],
      }),
      secondAddress: new FormControl(''),
      city: new FormControl('', {
        validators: [Validators.required],
      }),
      state: new FormControl('', {
        validators: [Validators.required],
      }),
      zipCode: new FormControl('', {
        validators: [
          Validators.required,
          addressCustomValidators.getCheckForZipCodeLengthValidator(),
        ],
      }),
      phoneNumber: new FormControl('', {
        validators: [
          Validators.required,
          addressCustomValidators.getCheckForValidPhoneNumberValidator(),
        ],
      }),
    });
  }
}
