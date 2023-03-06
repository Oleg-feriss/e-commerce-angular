import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { SharedModule } from '@shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { CardEditComponent } from './components/card-edit/card-edit.component';
import { CardAddComponent } from './components/card-add/card-add.component';
import { PaymentButtonComponent } from './components/payment-button/payment-button.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { RemoveCardDialogComponent } from './components/remove-card-dialog/remove-card-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CardNumberPipe } from './pipes/card-number.pipe';
import { CardSavePipe } from './pipes/card-save.pipe';

@NgModule({
  declarations: [
    PaymentComponent,
    CardComponent,
    CardEditComponent,
    CardAddComponent,
    PaymentButtonComponent,
    PaymentFormComponent,
    RemoveCardDialogComponent,
    CardNumberPipe,
    CardSavePipe,
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [
    CardComponent,
    CardEditComponent,
    CardAddComponent,
    RemoveCardDialogComponent,
  ],
})
export class PaymentModule {}
