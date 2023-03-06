import { Pipe, PipeTransform } from '@angular/core';

import {
  FORMAT_CARD_SAVE_REGEX,
  NO_SLASH_REGEX,
  TRIM_SLASH_REGEX,
} from '../constants';

@Pipe({
  name: 'cardSave',
})
export class CardSavePipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replace(NO_SLASH_REGEX, '')
      .replace(FORMAT_CARD_SAVE_REGEX, '$1/')
      .replace(TRIM_SLASH_REGEX, '');
  }
}
