import { FormControl, FormGroup, Validators } from '@angular/forms';

export class ChangeEmailAddressFormBuilder {
  public static getDefaultForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
    });
  }
}
