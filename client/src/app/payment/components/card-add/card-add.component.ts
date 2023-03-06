import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';

import { PaymentService } from '@shared/services/payment.service';
import { CARD_DEFAULT_VALUES } from 'app/payment/constants';
import { Card } from 'app/payment/models';
import { PaymentFormComponent } from '../payment-form/payment-form.component';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardAddComponent {
  @ViewChild('paymentForm') paymentFormComponent!: PaymentFormComponent;
  @Input() card: Card = CARD_DEFAULT_VALUES;

  constructor(private paymentService: PaymentService) {}

  public onAdd(): void {
    this.paymentService.addCard({
      ...this.paymentFormComponent.paymentForm.value,
      cardNumber: this.paymentFormComponent.paymentForm.value.cardNumber
        .split(' ')
        .join(''),
    });
  }
}
