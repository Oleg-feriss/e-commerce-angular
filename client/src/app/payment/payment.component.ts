import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { PaymentService } from '@shared/services/payment.service';
import { Card } from './models';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PaymentService],
})
export class PaymentComponent implements OnInit {
  public cards: Card[] = this.paymentService.cards;

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    if (localStorage['cards']) {
      this.paymentService.cards = JSON.parse(localStorage['cards']);
    }

    this.cards = this.paymentService.cards;
  }
}
