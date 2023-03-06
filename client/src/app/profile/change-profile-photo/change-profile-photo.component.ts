import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { User, InputField } from '@shared/models';
import { UserService } from '@shared/services/user.service';
import { UserCustomValidators } from '@shared/validators/user-custom-validators';
import { COMMON_ERRORS_LIST } from '@shared/constants';
import { ChangeProfilePhotoFormBuilder } from './helpers/change-profile-photo-form-builder';
import { CHANGE_PROFILE_PHOTO_FORM_FIELD } from './constants';

@Component({
  selector: 'app-change-profile-photo',
  templateUrl: './change-profile-photo.component.html',
  styleUrls: ['./change-profile-photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeProfilePhotoComponent {
  public readonly formField: InputField = CHANGE_PROFILE_PHOTO_FORM_FIELD;
  public readonly formGroup = ChangeProfilePhotoFormBuilder.getDefaultForm(
    this.userCustomValidators
  );
  public isPhotoUpdated$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public fileName: string = '';
  public errorMessages: string[] = [];
  public photoUrl: string = '';

  public get formControl(): FormControl {
    return this.formGroup.controls['image'] as FormControl;
  }

  constructor(
    private userCustomValidators: UserCustomValidators,
    private userService: UserService
  ) {}

  public onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0] ?? null;

    if (file !== null) {
      this.uploadFile(file);
    }
  }

  public onSubmit(): void {
    const currentUser = this.userService.getUserData();

    const updatedUser: User = { ...currentUser, photo: this.photoUrl };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    this.isPhotoUpdated$.next(true);
  }

  public uploadFile(file: File): void {
    this.formControl.setValue(file, {
      emitModelToViewChange: false,
    });

    const reader = new FileReader();
    reader.onload = (event: ProgressEvent) => {
      this.photoUrl = (event.target as FileReader)!.result as string;
    };
    reader.readAsDataURL(file);

    this.fileName = file.name;
    this.setErrorMessages();
  }

  public setErrorMessages(): void {
    const controlErrors = this.formControl.errors || {};
    this.errorMessages = Object.keys(controlErrors).map(
      key => this.formField.customErrors?.[key] ?? COMMON_ERRORS_LIST[key]
    );
  }
}
