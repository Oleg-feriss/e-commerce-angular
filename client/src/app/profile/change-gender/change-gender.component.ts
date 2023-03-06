import { FormControl, FormGroup } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserService } from '@shared/services/user.service';
import { User, SelectOption } from '@shared/models';
import { GENDER_LIST } from './constants';
import { ChangeGenderFormBuilder } from './helpers/change-gender-form-builder';

@Component({
  selector: 'app-change-gender',
  templateUrl: './change-gender.component.html',
  styleUrls: ['./change-gender.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeGenderComponent implements OnInit {
  public readonly selectOptions: SelectOption[] = GENDER_LIST;
  public readonly formGroup: FormGroup =
    ChangeGenderFormBuilder.getDefaultForm();
  public isGenderUpdated$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public currentUser!: User;
  public selectLabel: string = '';

  public get formControl(): FormControl {
    return this.formGroup.controls['gender'] as FormControl;
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getUserData();
    this.setSelectLabel();
  }

  public onSubmit(): void {
    const updatedUser: User = {
      ...this.currentUser,
      gender: this.formControl.value,
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));
    this.isGenderUpdated$.next(true);
  }

  private setSelectLabel(): void {
    this.selectLabel = this.currentUser.gender
      ? `Current gender: ${this.currentUser.gender}`
      : 'Choose a gender';
  }
}
