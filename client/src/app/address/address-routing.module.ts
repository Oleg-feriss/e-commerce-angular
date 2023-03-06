import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressComponent } from './address.component';
import { AddressFormComponent } from './components/address-form/address-form.component';

const routes: Routes = [
  { path: '', component: AddressComponent },
  { path: 'address-form', component: AddressFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressRoutingModel {}
