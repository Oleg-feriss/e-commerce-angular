import { Pipe, PipeTransform } from '@angular/core';

import { FORMAT_CARD_NUMBER_REGEX, NO_SPACES_REGEX } from '../constants';

@Pipe({
  name: 'cardNumber',
})
export class CardNumberPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replace(NO_SPACES_REGEX, '')
      .replace(FORMAT_CARD_NUMBER_REGEX, '$1 ')
      .trim();
  }
}
