import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FORMAT_CARD_NUMBER_REGEX } from 'app/payment/constants';
import { Card } from 'app/payment/models';
import { PaymentComponent } from 'app/payment/payment.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  public cardNumber!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.formatCardNumber(this.card.cardNumber);
  }

  public isEditButtonVisible(): boolean {
    return this.route.component === PaymentComponent ? true : false;
  }

  private formatCardNumber(cardNumber: string) {
    this.cardNumber = cardNumber
      .toString()
      .replace(FORMAT_CARD_NUMBER_REGEX, '$1 ')
      .trim();
  }
}
