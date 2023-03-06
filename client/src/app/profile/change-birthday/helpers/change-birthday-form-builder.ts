import { FormControl, FormGroup } from '@angular/forms';
import { UserCustomValidators } from '@shared/validators/user-custom-validators';

export class ChangeBirthdayFormBuilder {
  public static getDefaultForm(
    userCustomValidators: UserCustomValidators
  ): FormGroup {
    return new FormGroup({
      birthday: new FormControl('', {
        validators: [
          userCustomValidators.getCheckDateFormatValidator(),
          userCustomValidators.getCheckForFutureDateValidator(),
          userCustomValidators.getCheckForEarliestPossibleDateValidator(),
        ],
      }),
    });
  }
}
