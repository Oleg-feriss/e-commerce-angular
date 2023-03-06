import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentService } from '@shared/services/payment.service';

@Component({
  selector: 'app-remove-card-dialog',
  templateUrl: './remove-card-dialog.component.html',
  styleUrls: ['./remove-card-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoveCardDialogComponent {
  constructor(
    private paymentService: PaymentService,
    @Inject(MAT_DIALOG_DATA) public data: { index: number }
  ) {}

  public onCardDelete(): void {
    this.paymentService.deleteCard(this.data.index);
  }
}
