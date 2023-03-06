import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { Observable, takeUntil } from 'rxjs';

import { COMMON_ERRORS_LIST } from '@shared/constants';
import { TakeUntilDestroy } from '@core/decorators/take-until-destroy';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@TakeUntilDestroy
export class AutocompleteInputComponent implements OnInit, OnDestroy {
  @Input() options: string[] = [];
  @Input() group!: FormGroup;
  @Input() name: string = '';
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() customErrors?: Record<string, string>;
  private componentDestroy!: () => Observable<void>;

  public showOptions: boolean = false;

  public get formControl(): FormControl {
    return this.group.controls[this.name] as FormControl;
  }

  public get errorMessages(): string[] {
    const controlErrors = this.formControl.errors || {};
    return Object.keys(controlErrors).map(
      key => this.customErrors?.[key] ?? COMMON_ERRORS_LIST[key]
    );
  }

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.formControl.statusChanges
      .pipe(takeUntil(this.componentDestroy()))
      .subscribe(() => this.changeDetectorRef.markForCheck());
  }

  ngOnDestroy(): void {}

  public toggleDropDown(): void {
    this.showOptions = !this.showOptions;
  }

  public selectValue(value: string): void {
    this.formControl.patchValue(value);
    this.toggleDropDown();
  }

  public onOutsideClick(): void {
    this.showOptions = false;
  }

  public getSearchValue(): string {
    return this.formControl.value;
  }
}
