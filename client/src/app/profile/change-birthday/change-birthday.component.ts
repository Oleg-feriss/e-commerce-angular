import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import * as moment from 'moment';

import { UserService } from '@shared/services/user.service';
import { User, InputField } from '@shared/models';
import { COMMON_ERRORS_LIST } from '@shared/constants';
import { UserCustomValidators } from '@shared/validators/user-custom-validators';
import { CHANGE_BIRTHDAY_FORM_FIELD, DATE_FORMAT_SETTINGS } from './constants';
import { ChangeBirthdayFormBuilder } from './helpers/change-birthday-form-builder';

@Component({
  selector: 'app-change-birthday',
  templateUrl: './change-birthday.component.html',
  styleUrls: ['./change-birthday.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT_SETTINGS },
    {
      provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
      useValue: { useUtc: true, strict: true },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeBirthdayComponent implements OnInit {
  public readonly formField: InputField = CHANGE_BIRTHDAY_FORM_FIELD;
  public readonly formGroup: FormGroup =
    ChangeBirthdayFormBuilder.getDefaultForm(this.userCustomValidators);
  public isBirthdayUpdated$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public get formControl(): FormControl {
    return this.formGroup.controls[this.formField.name] as FormControl;
  }

  public get errorMessages(): string[] {
    const controlErrors = this.formControl.errors || {};
    return Object.keys(controlErrors).map(
      key => this.formField.customErrors?.[key] ?? COMMON_ERRORS_LIST[key]
    );
  }

  constructor(
    private userCustomValidators: UserCustomValidators,
    private userService: UserService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.formControl.statusChanges.subscribe(() =>
      this.changeDetectorRef.markForCheck()
    );
  }

  public onSubmit(): void {
    const currentUser = this.userService.getUserData();
    const selectedDate: string = this.formControl.value;
    const updatedUser: User = {
      ...currentUser,
      birthday: moment(selectedDate).toDate(),
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    this.isBirthdayUpdated$.next(true);
  }
}
