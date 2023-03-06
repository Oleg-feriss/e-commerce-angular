import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { SharedModule } from '@shared/shared.module';
import { AddressComponent } from './address.component';
import { AddressRoutingModel } from './address-routing.module';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { DeleteAddressModalComponent } from './components/delete-address-modal/delete-address-modal.component';

@NgModule({
  declarations: [
    AddressComponent,
    AddressFormComponent,
    DeleteAddressModalComponent,
  ],
  imports: [
    CommonModule,
    AddressRoutingModel,
    SharedModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
})
export class AddressModule {}
