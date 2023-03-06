import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { User, InputField } from '@shared/models';
import { UserService } from '@shared/services/user.service';
import { UserCustomValidators } from '@shared/validators/user-custom-validators';
import { CHANGE_PHONE_NUMBER_FORM_FIELDS } from './constants';
import { ChangePhoneNumberFormBuilder } from './helpers/change-phone-number-form-builder';

@Component({
  selector: 'app-change-phone-number',
  templateUrl: './change-phone-number.component.html',
  styleUrls: ['./change-phone-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePhoneNumberComponent implements OnInit {
  public readonly formFields: InputField[] = CHANGE_PHONE_NUMBER_FORM_FIELDS;
  public readonly formGroup = ChangePhoneNumberFormBuilder.getDefaultForm(
    this.userCustomValidators
  );
  public isPhoneNumberUpdated$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private currentUser!: User;

  public get formControl(): FormControl {
    return this.formGroup.controls['phoneNumber'] as FormControl;
  }

  constructor(
    private userCustomValidators: UserCustomValidators,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getUserData();
  }

  public onSubmit(): void {
    const updatedUser: User = {
      ...this.currentUser,
      phoneNumber: this.formControl.value,
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    this.isPhoneNumberUpdated$.next(true);
  }
}
