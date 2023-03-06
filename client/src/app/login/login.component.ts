import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, of, takeUntil } from 'rxjs';

import { TakeUntilDestroy } from '../core/decorators/take-until-destroy';
import { InputField } from '../shared/models';
import { UserService } from '../shared/services/user.service';
import { SIGN_IN_FORM_FIELDS } from './constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@TakeUntilDestroy
export class LoginComponent implements OnDestroy {
  public readonly formFields: InputField[] = SIGN_IN_FORM_FIELDS;
  public isLoginError$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public formGroup = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
  });
  private componentDestroy!: () => Observable<void>;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  ngOnDestroy(): void {}

  public onLogin() {
    this.userService
      .login(this.formGroup.value)
      .pipe(
        catchError(() => {
          this.isLoginError$.next(true);
          return of({ token: '', user: {} });
        }),
        takeUntil(this.componentDestroy())
      )
      .subscribe(res => {
        this.isLoginError$.next(!Boolean(res.token));
        if (res.token) {
          this.router.navigate(['']);
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
        }
      });
  }
}
