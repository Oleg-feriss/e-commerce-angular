import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import {
  CartProduct,
  Product,
  QuantityChangeType,
  RelatedProduct,
  TabChangeType,
} from '@product-page/models';
import { CartService } from '@product-page/services/cart.service';

@Component({
  selector: 'app-product-page-desktop',
  templateUrl: './product-page-desktop.component.html',
  styleUrls: ['./product-page-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageDesktopComponent {
  @Input() product!: Product;
  @Input() relatedProducts: RelatedProduct[] = [];

  public quantity: number = 0;
  public tabChangeType: typeof TabChangeType = TabChangeType;
  public tab: TabChangeType = TabChangeType.Info;
  public readonly quantityChangeType: typeof QuantityChangeType =
    QuantityChangeType;
  public productSize: number = 0;
  private productColor: string = '';

  public get isButtonDisabled(): boolean {
    return !(
      Boolean(this.productSize) &&
      Boolean(this.productColor) &&
      Boolean(this.quantity)
    );
  }

  constructor(private cartService: CartService) {}

  public addToFavorites(icon: HTMLElement): void {
    icon.classList.toggle('add-to-favorites__icon--added');
  }

  public onQuantityChange(changeType: QuantityChangeType): void {
    switch (changeType) {
      case this.quantityChangeType.Increase:
        this.quantity += 1;
        break;
      case this.quantityChangeType.Decrease:
        this.quantity = this.quantity === 0 ? 0 : this.quantity - 1;
        break;
    }
  }

  public addToCart(): void {
    const { name, description, price, images } = this.product;
    const updatedProduct: CartProduct = {
      name,
      description,
      price,
      image: images[0],
      size: Number(this.productSize),
      color: this.productColor,
      quantity: this.quantity,
      totalPrice: this.quantity * price,
    };
    this.cartService.updateCart(updatedProduct);
  }

  public onTabChange(changeType: TabChangeType): void {
    this.tab = changeType;
  }

  public setProductColor(color: string): void {
    this.productColor = color;
  }
}
