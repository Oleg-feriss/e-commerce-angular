import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryProductComponent } from './category-product/category-product.component';

@NgModule({
  declarations: [CategoriesComponent, CategoryProductComponent],
  imports: [CommonModule, CategoriesRoutingModule, MatCardModule],
})
export class CategoriesModule {}
