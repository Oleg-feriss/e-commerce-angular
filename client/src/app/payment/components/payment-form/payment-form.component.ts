import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, takeUntil } from 'rxjs';

import { TakeUntilDestroy } from '@core/decorators/take-until-destroy';
import { PaymentService } from '@shared/services/payment.service';
import { PaymentFormBuilder } from 'app/payment/helpers/payment-form-builder';
import { Card } from 'app/payment/models';
import { CardNumberPipe } from 'app/payment/pipes/card-number.pipe';
import { CardSavePipe } from 'app/payment/pipes/card-save.pipe';
import { PaymentFormValidators } from 'app/payment/validators/payment-form.validators';
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
  providers: [CardNumberPipe, CardSavePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@TakeUntilDestroy
export class PaymentFormComponent implements OnInit, OnDestroy {
  @Input() card!: Card;
  public paymentForm!: FormGroup;
  private componentDestroy!: () => Observable<void>;

  constructor(
    private cardNumberMask: CardNumberPipe,
    private cardSaveMask: CardSavePipe,
    private paymentService: PaymentService,
    private paymentValidators: PaymentFormValidators,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paymentForm = PaymentFormBuilder.getPaymentForm(
      this.paymentValidators,
      {
        ...this.card,
        cardNumber: this.cardNumberMask.transform(this.card.cardNumber),
        expirationDate: this.cardSaveMask.transform(this.card.expirationDate),
      },
      this.route
    );

    this.paymentService.setIsFormValid(this.paymentForm.valid);

    this.paymentForm.valueChanges
      .pipe(takeUntil(this.componentDestroy()))
      .subscribe(paymentFormValues => {
        this.paymentService.formValues = paymentFormValues;
        this.paymentService.setIsFormValid(this.paymentForm.valid);
      });

    this.paymentForm
      .get('cardNumber')
      ?.valueChanges.pipe(takeUntil(this.componentDestroy()))
      .subscribe(value => {
        const maskedValue = this.cardNumberMask.transform(value);

        if (value !== maskedValue) {
          this.paymentForm.patchValue({ cardNumber: maskedValue });
        }
      });

    this.paymentForm
      .get('expirationDate')
      ?.valueChanges.pipe(takeUntil(this.componentDestroy()))
      .subscribe(value => {
        const maskedValue = this.cardSaveMask.transform(value);

        if (value !== maskedValue) {
          this.paymentForm.patchValue({ expirationDate: maskedValue });
        }
      });
  }

  ngOnDestroy(): void {}

  public onSubmit(): Card {
    return this.paymentForm.value;
  }

  public hasError(controlName: string, errorName: string): boolean | undefined {
    return (
      this.paymentForm.get(controlName)?.touched &&
      this.paymentForm.get(controlName)?.hasError(errorName)
    );
  }
}
