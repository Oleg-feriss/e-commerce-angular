import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartMobileComponent } from './components/cart-mobile/cart-mobile.component';
import { SharedModule } from '@shared/shared.module';
import { QuantityControlsComponent } from './components/quantity-controls/quantity-controls.component';
import { VoucherFormComponent } from './components/voucher-form/voucher-form.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { VoucherDetailsComponent } from './components/voucher-details/voucher-details.component';
import { TotalPriceDetailsComponent } from './components/total-price-details/total-price-details.component';

@NgModule({
  declarations: [
    CartComponent,
    CartMobileComponent,
    QuantityControlsComponent,
    VoucherFormComponent,
    OrderDetailsComponent,
    VoucherDetailsComponent,
    TotalPriceDetailsComponent,
  ],
  imports: [CommonModule, CartRoutingModule, SharedModule],
  exports: [
    CartMobileComponent,
    QuantityControlsComponent,
    VoucherFormComponent,
    OrderDetailsComponent,
    VoucherDetailsComponent,
    TotalPriceDetailsComponent,
  ],
})
export class CartModule {}
