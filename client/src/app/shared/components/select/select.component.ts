import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

import { SelectOption } from '@shared/models';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnInit {
  @Input() selectOptions: SelectOption[] = [];
  @Input() name: string = '';
  @Input() group!: FormGroup;
  @Input() label!: string;

  public get formControl(): FormControl {
    return this.group.controls[this.name] as FormControl;
  }

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.formControl.statusChanges.subscribe(() =>
      this.changeDetectorRef.markForCheck()
    );
  }
}
