import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCustomValidators } from '@shared/validators/user-custom-validators';

export class ChangePhoneNumberFormBuilder {
  public static getDefaultForm(
    userCustomValidators: UserCustomValidators
  ): FormGroup {
    return new FormGroup({
      phoneNumber: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(11),
          userCustomValidators.getPhoneNumberValidator(),
        ],
      }),
    });
  }
}
