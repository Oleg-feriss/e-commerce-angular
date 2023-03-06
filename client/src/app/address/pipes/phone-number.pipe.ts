import { Pipe, PipeTransform } from '@angular/core';

import { NOT_DIGIT_REGEX, PHONE_NUMBER_PIPE_MATCH } from '../constants/';

@Pipe({ name: 'phoneNumber' })
export class PhoneNumberPipe implements PipeTransform {
  transform(value: string | undefined) {
    if (!value) {
      return '';
    }

    let newValue = value.replace(NOT_DIGIT_REGEX, '');
    if (!newValue || newValue?.length < 3) {
      return newValue;
    }

    const pipeMatch = PHONE_NUMBER_PIPE_MATCH.find(
      match => newValue.length <= match.length
    );

    return pipeMatch
      ? this.matchPipe(newValue, pipeMatch)
      : this.fullMatchPipe(newValue);
  }

  private fullMatchPipe(newValue: string): string {
    const fullMatch =
      PHONE_NUMBER_PIPE_MATCH[PHONE_NUMBER_PIPE_MATCH.length - 1];

    return newValue
      .substring(0, fullMatch.length)
      .replace(fullMatch.pattern, fullMatch.replaceValue);
  }

  private matchPipe(
    newValue: string,
    pipeMatch: { length: number; pattern: RegExp; replaceValue: string }
  ): string {
    return newValue.replace(pipeMatch.pattern, pipeMatch.replaceValue);
  }
}
