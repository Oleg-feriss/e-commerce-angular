import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'address',
        loadChildren: () =>
          import('../address/address.module').then(m => m.AddressModule),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('../payment/payment.module').then(m => m.PaymentModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
