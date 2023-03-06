import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, takeUntil } from 'rxjs';

import { TakeUntilDestroy } from '@core/decorators/take-until-destroy';
import { UserService } from '@shared/services/user.service';
import { UserCustomValidators } from '@shared/validators/user-custom-validators';
import { User, InputField } from '@shared/models';
import { ChangeNameFormBuilder } from './helpers/change-name-form-builder';
import { CHANGE_NAME_FORM_FIELDS } from './constants';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@TakeUntilDestroy
export class ChangeNameComponent implements OnDestroy {
  public readonly formFields: InputField[] = CHANGE_NAME_FORM_FIELDS;
  public formGroup = ChangeNameFormBuilder.getDefaultForm(
    this.userCustomValidators
  );
  public isNameUpdated$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private componentDestroy!: () => Observable<void>;

  constructor(
    private userCustomValidators: UserCustomValidators,
    private userService: UserService
  ) {}

  ngOnDestroy(): void {}

  public onSubmit(): void {
    const currentUser = this.userService.getUserData();
    const updatedUser: User = {
      ...currentUser,
      name: this.formGroup.get('name')?.value,
      surname: this.formGroup.get('surname')?.value,
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    this.userService
      .updateName(currentUser._id, this.formGroup.value)
      .pipe(
        catchError(() => of({})),
        takeUntil(this.componentDestroy())
      )
      .subscribe(() => this.isNameUpdated$.next(true));
  }
}
