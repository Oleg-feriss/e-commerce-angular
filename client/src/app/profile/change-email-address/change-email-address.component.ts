import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  partition,
  switchMap,
  takeUntil,
} from 'rxjs';

import { TakeUntilDestroy } from '@core/decorators/take-until-destroy';
import { User, InputField } from '@shared/models';
import { UserService } from '@shared/services/user.service';
import { CHANGE_EMAIL_ADDRESS_FORM_FIELDS } from './constants';
import { ChangeEmailAddressFormBuilder } from './helpers/change-email-address-form-builder';

@Component({
  selector: 'app-change-email-address',
  templateUrl: './change-email-address.component.html',
  styleUrls: ['./change-email-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@TakeUntilDestroy
export class ChangeEmailAddressComponent implements OnInit, OnDestroy {
  public readonly formFields: InputField[] = CHANGE_EMAIL_ADDRESS_FORM_FIELDS;
  public readonly formGroup = ChangeEmailAddressFormBuilder.getDefaultForm();
  public isEmailUpdated$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public currentUser!: User;
  private componentDestroy!: () => Observable<void>;

  public get formControl(): FormControl {
    return this.formGroup.controls['email'] as FormControl;
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getUserData();
  }

  ngOnDestroy(): void {}

  public onSubmit(): void {
    const [emailExists$, emailDoesNotExist$] = partition(
      this.userService.doesEmailExist(this.formControl?.value),
      doesEmailExist => doesEmailExist
    );
    emailExists$
      .pipe(
        catchError(() => of(null)),
        takeUntil(this.componentDestroy())
      )
      .subscribe(() => this.formControl?.setErrors({ emailExists: true }));

    emailDoesNotExist$
      .pipe(
        switchMap(() =>
          this.userService.updateName(
            this.currentUser._id,
            this.formGroup.value
          )
        ),
        catchError(() => of({ token: '', user: {} })),
        takeUntil(this.componentDestroy())
      )
      .subscribe(() => {
        const updatedUser: User = {
          ...this.currentUser,
          email: this.formControl.value,
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        this.isEmailUpdated$.next(true);
      });
  }
}
