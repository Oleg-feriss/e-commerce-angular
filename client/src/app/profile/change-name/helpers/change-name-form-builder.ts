import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ONLY_LETTERS_REGEX } from '@shared/constants';
import { UserCustomValidators } from '@shared/validators/user-custom-validators';

export class ChangeNameFormBuilder {
  public static getDefaultForm(
    userCustomValidators: UserCustomValidators
  ): FormGroup {
    return new FormGroup({
      name: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern(ONLY_LETTERS_REGEX),
          userCustomValidators.getCheckForNumbersValidator(),
          userCustomValidators.getCheckForSpecialCharactersValidator(),
        ],
      }),
      surname: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern(ONLY_LETTERS_REGEX),
          userCustomValidators.getCheckForNumbersValidator(),
          userCustomValidators.getCheckForSpecialCharactersValidator(),
        ],
      }),
    });
  }
}
