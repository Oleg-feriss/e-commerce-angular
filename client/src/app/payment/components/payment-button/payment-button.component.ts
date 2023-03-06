import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TakeUntilDestroy } from '@core/decorators/take-until-destroy';
import { PaymentService } from '@shared/services/payment.service';
import { PaymentComponent } from 'app/payment/payment.component';
import { Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-payment-button',
  templateUrl: './payment-button.component.html',
  styleUrls: ['./payment-button.component.scss'],
})
@TakeUntilDestroy
export class PaymentButtonComponent implements OnInit, OnDestroy {
  @Output() buttonClickedEvent: EventEmitter<void> = new EventEmitter<void>();
  public isButtonDisabled!: boolean;

  private componentDestroy!: () => Observable<void>;

  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paymentService
      .getIsFormValid()
      .pipe(takeUntil(this.componentDestroy()))
      .subscribe(value => {
        this.isButtonDisabled = value;
      });

    if (this.route.component === PaymentComponent) {
      this.isButtonDisabled = true;
    }
  }

  ngOnDestroy(): void {}

  public onClick(): void {
    this.buttonClickedEvent.emit();
  }
}
