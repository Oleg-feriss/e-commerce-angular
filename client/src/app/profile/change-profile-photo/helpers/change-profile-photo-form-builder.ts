import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCustomValidators } from '@shared/validators/user-custom-validators';

export class ChangeProfilePhotoFormBuilder {
  public static getDefaultForm(
    userCustomValidators: UserCustomValidators
  ): FormGroup {
    return new FormGroup({
      image: new FormControl('', {
        validators: [
          Validators.required,
          userCustomValidators.getCheckProfilePhotoSizeValidator(),
        ],
      }),
    });
  }
}
