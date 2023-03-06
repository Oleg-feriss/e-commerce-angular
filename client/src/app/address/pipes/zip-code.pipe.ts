import { Pipe, PipeTransform } from '@angular/core';

import { NOT_DIGIT_REGEX } from '../constants/';

@Pipe({ name: 'zipCode' })
export class ZipCodePipe implements PipeTransform {
  transform(value: string | undefined) {
    if (!value) {
      return '';
    }

    let formattedValue = value.replace(NOT_DIGIT_REGEX, '');
    if (!formattedValue || formattedValue?.length < 2) {
      return formattedValue;
    }

    formattedValue = formattedValue.trim();
    const zipWithoutDash = formattedValue.replace(/-/g, '');

    if (!zipWithoutDash || zipWithoutDash.length < 2) {
      return formattedValue;
    }

    const firstTwoDigits = zipWithoutDash.slice(0, 2);
    const lastThreeDigits =
      zipWithoutDash.length > 2 ? zipWithoutDash.slice(2) : '';
    const lastFourWithDash = lastThreeDigits ? '-' + lastThreeDigits : '';

    return `${firstTwoDigits}${lastFourWithDash}`;
  }
}
