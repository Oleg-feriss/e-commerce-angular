import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputField } from '../../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  @Input() group!: FormGroup;
  @Input() fields: InputField[] = [];
  @Output() submitForm: EventEmitter<SubmitEvent> =
    new EventEmitter<SubmitEvent>();

  onSubmit(event: SubmitEvent) {
    this.submitForm.emit(event);
  }
}
