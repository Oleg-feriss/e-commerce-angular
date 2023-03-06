import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardAddComponent } from './components/card-add/card-add.component';
import { CardEditComponent } from './components/card-edit/card-edit.component';
import { PaymentComponent } from './payment.component';

const routes: Routes = [
  { path: '', component: PaymentComponent },
  {
    path: 'edit-card/:number',
    component: CardEditComponent,
  },
  {
    path: 'add-card',
    component: CardAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
