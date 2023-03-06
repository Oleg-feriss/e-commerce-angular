import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MOBILE_MENU_LIST } from 'app/home/constants';
import { Category } from '@shared/models';
import { PRODUCT, RELATED_PRODUCTS } from './constants';
import { Product, RelatedProduct } from './models';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent {
  public readonly menuListItems: Category[] = MOBILE_MENU_LIST;
  public readonly product: Product = PRODUCT;
  public readonly relatedProducts: RelatedProduct[] = RELATED_PRODUCTS;
}
