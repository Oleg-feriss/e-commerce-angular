import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { PaymentService } from '@shared/services/payment.service';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { RemoveCardDialogComponent } from '../remove-card-dialog/remove-card-dialog.component';
import { Card } from 'app/payment/models';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardEditComponent implements OnInit {
  @ViewChild('paymentForm') paymentForm!: PaymentFormComponent;

  public currentCardIndex!: number;
  public card!: Card;

  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.card = this.paymentService.getCard(
      Number(this.route.snapshot.params['number'])
    );

    this.currentCardIndex = this.paymentService.cards
      .map(card => card.cardNumber)
      .indexOf(this.card!.cardNumber);
  }

  public onEdit(): void {
    this.paymentService.editCard(this.currentCardIndex, {
      ...this.paymentForm.paymentForm.value,
      cardNumber: this.paymentForm.paymentForm.value.cardNumber
        .split(' ')
        .join(''),
    });
  }

  public deleteCardDialog(): void {
    this.dialog.open(RemoveCardDialogComponent, {
      data: {
        index: this.currentCardIndex,
      },
    });
  }
}
