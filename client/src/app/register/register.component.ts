import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import {
  partition,
  switchMap,
  catchError,
  of,
  takeUntil,
  Observable,
  BehaviorSubject,
} from 'rxjs';

import { InputField } from '../shared/models';
import { UserService } from '../shared/services/user.service';
import { UserCustomValidators } from '../shared/validators/user-custom-validators';
import { SIGN_UP_FORM_FIELDS } from './constants';
import { RegisterFormBuilder } from './helpers/register-form-builder';
import { TakeUntilDestroy } from '../core/decorators/take-until-destroy';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserCustomValidators],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@TakeUntilDestroy
export class RegisterComponent implements OnDestroy {
  public isUserCreated$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public readonly formFields: InputField[] = SIGN_UP_FORM_FIELDS;
  public formGroup = RegisterFormBuilder.getDefaultForm(
    this.userCustomValidators
  );
  private componentDestroy!: () => Observable<void>;

  constructor(
    private readonly userCustomValidators: UserCustomValidators,
    private readonly userService: UserService
  ) {}

  ngOnDestroy(): void {}

  public onSubmit(): void {
    const [emailExists$, emailDoesNotExist$] = partition(
      this.userService.doesEmailExist(this.formGroup.get('email')?.value),
      doesEmailExist => doesEmailExist
    );
    emailExists$
      .pipe(
        catchError(() => of(null)),
        takeUntil(this.componentDestroy())
      )
      .subscribe(() =>
        this.formGroup.get('email')?.setErrors({ emailExists: true })
      );
    emailDoesNotExist$
      .pipe(
        switchMap(() => this.userService.register(this.formGroup.value)),
        catchError(() => of({ token: '', user: {} })),
        takeUntil(this.componentDestroy())
      )
      .subscribe(() => this.isUserCreated$.next(true));
  }
}
