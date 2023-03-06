import { Component, Input } from '@angular/core';

import { Product } from '@shared/models';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss'],
})
export class CategoryProductComponent {
  @Input() product!: Product;
}
