import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';

import { ONLY_SPECIAL_CHARACTERS_REGEX } from '../constants';
import { COUNTRIES } from 'app/address/constants';
import {
  MAX_PHONE_NUMBER_LENGTH,
  MAX_ZIP_CODE_LENGTH,
} from '@shared/constants';

@Injectable({
  providedIn: 'root',
})
export class AddressCustomValidators {
  public getCheckForNumbersValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const numbersRegex = /\d+/;

      return value && value.match(numbersRegex)
        ? { containsNumber: true }
        : null;
    };
  }

  public getCheckForSpecialCharactersValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      return value && value.match(ONLY_SPECIAL_CHARACTERS_REGEX)
        ? { containsSpecialCharacters: true }
        : null;
    };
  }

  public getCheckForZipCodeLengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      return value && value.length < MAX_ZIP_CODE_LENGTH
        ? { zipCodeLength: true }
        : null;
    };
  }

  public getCheckForCountryExistenceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const countryExist = COUNTRIES.find(country => country === value);

      return value && !countryExist ? { countryNotExist: true } : null;
    };
  }

  public getCheckForValidPhoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      return value && value.length < MAX_PHONE_NUMBER_LENGTH
        ? { phoneNumberLength: true }
        : null;
    };
  }
}
