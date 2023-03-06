import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CartService } from '@product-page/services/cart.service';
import { CartProduct, Product, RelatedProduct } from '@product-page/models';

@Component({
  selector: 'app-product-page-mobile',
  templateUrl: './product-page-mobile.component.html',
  styleUrls: ['./product-page-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageMobileComponent {
  @Input() product!: Product;
  @Input() relatedProducts: RelatedProduct[] = [];
  private readonly quantity: number = 1;
  private productSize: number = 0;
  private productColor: string = '';

  public get isButtonDisabled(): boolean {
    return !(Boolean(this.productSize) && Boolean(this.productColor));
  }

  constructor(private cartService: CartService) {}

  public addToFavorites(icon: HTMLElement): void {
    icon.classList.toggle('add-to-favorite--added');
  }

  public addToCart(): void {
    const { name, description, price, images } = this.product;
    const updatedProduct: CartProduct = {
      name,
      description,
      price,
      image: images[0],
      size: this.productSize,
      color: this.productColor,
      quantity: this.quantity,
      totalPrice: price * this.quantity,
    };
    this.cartService.updateCart(updatedProduct);
  }

  public setProductSize(size: number): void {
    this.productSize = size;
  }

  public setProductColor(color: string): void {
    this.productColor = color;
  }
}
