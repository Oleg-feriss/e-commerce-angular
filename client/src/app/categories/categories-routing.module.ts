import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  { path: 'shoes', component: CategoriesComponent },
  { path: 'bags', component: CategoriesComponent },
  { path: 'belts', component: CategoriesComponent },
  { path: 'sunglasses', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
