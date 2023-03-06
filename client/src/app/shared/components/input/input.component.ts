import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormGroup,
  ControlContainer,
  FormGroupDirective,
  FormControl,
} from '@angular/forms';

import { InputError } from '../../models';
import { COMMON_ERRORS_LIST } from '../../constants';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
  @Input() group!: FormGroup;
  @Input() name: string = '';
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() icon: string = '';
  @Input() errors: InputError[] = [];
  @Input() customErrors?: Record<string, string>;
  @Input() maxLength?: number;

  public get formControl(): FormControl {
    return this.group.controls[this.name] as FormControl;
  }

  public get errorMessages(): string[] {
    const controlErrors = this.formControl.errors || {};
    return Object.keys(controlErrors).map(
      key =>
        (this.customErrors && this.customErrors[key]) ?? COMMON_ERRORS_LIST[key]
    );
  }

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.formControl.statusChanges.subscribe(() =>
      this.changeDetectorRef.markForCheck()
    );
  }
}
