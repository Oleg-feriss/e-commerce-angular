import { FormControl, FormGroup, Validators } from '@angular/forms';

export class ChangeGenderFormBuilder {
  public static getDefaultForm(): FormGroup {
    return new FormGroup({
      gender: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }
}
