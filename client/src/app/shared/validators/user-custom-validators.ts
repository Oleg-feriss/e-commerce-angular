import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

import {
  ONLY_SPECIAL_CHARACTERS_REGEX,
  PASSWORD_MINIMUM_LENGTH_REGEX,
  CORRECT_PASSWORD_REGEX,
  ONLY_DIGITS_REGEX,
} from '../constants';
import { DATE_FORMAT } from 'app/profile/change-birthday/constants';

@Injectable({
  providedIn: 'root',
})
export class UserCustomValidators {
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

  public getCheckForPasswordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      const hasDigit = ONLY_DIGITS_REGEX.test(value);
      const hasSpecialCharacter = ONLY_SPECIAL_CHARACTERS_REGEX.test(value);
      const hasMinimumLength = PASSWORD_MINIMUM_LENGTH_REGEX.test(value);
      let errorType;

      switch (true) {
        case hasDigit && !hasSpecialCharacter && !hasMinimumLength:
          errorType = 'onlyDigits';
          break;
        case hasSpecialCharacter && !hasDigit && !hasMinimumLength:
          errorType = 'onlySpecialCharacters';
          break;
        case hasMinimumLength && !hasDigit && !hasSpecialCharacter:
          errorType = 'onlyLength';
          break;
        case hasDigit && hasSpecialCharacter && !hasMinimumLength:
          errorType = 'digitsAndSpecialCharacters';
          break;
        case hasDigit && hasMinimumLength && !hasSpecialCharacter:
          errorType = 'digitsAndLength';
          break;
        case hasSpecialCharacter && hasMinimumLength && !hasDigit:
          errorType = 'specialCharactersAndLength';
          break;
        default:
          errorType = 'default';
      }

      return value && !value.match(CORRECT_PASSWORD_REGEX)
        ? {
            [errorType]: true,
          }
        : null;
    };
  }

  public getCheckPasswordsMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.parent?.get('password')?.value;
      const confirmPassword = control.value;

      return password !== confirmPassword ? { mismatch: true } : null;
    };
  }

  public getCheckProfilePhotoSizeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const file = control.value;
      const ONE_MEGA_BYTE = 1000000;

      return file instanceof File && file.size <= ONE_MEGA_BYTE
        ? null
        : { invalidSize: true };
    };
  }

  public getCheckDateFormatValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const date = control.value;

      return moment(date, DATE_FORMAT, true).isValid()
        ? null
        : { invalidFormat: true };
    };
  }

  public getCheckForFutureDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const date = control.value;

      return moment(date, DATE_FORMAT).isAfter(moment())
        ? { dateFromFuture: true }
        : null;
    };
  }

  public getCheckForEarliestPossibleDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const date = control.value;

      return moment(date, DATE_FORMAT).isBefore(moment('01/01/1900'))
        ? { tooOldDate: true }
        : null;
    };
  }

  public getPhoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const numbersRegex = /^[+]?\d+$/;

      return value && value.match(numbersRegex)
        ? null
        : { invalidCharacter: true };
    };
  }
}
