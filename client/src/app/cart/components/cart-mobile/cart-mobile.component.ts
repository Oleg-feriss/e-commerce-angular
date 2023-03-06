import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Observable, takeUntil } from 'rxjs';
import { CartService } from '@product-page/services/cart.service';
import { QuantityChangeType, CartProduct } from '@product-page/models';
import { TakeUntilDestroy } from '@core/decorators/take-until-destroy';
import { Voucher, OrderDetails } from './../../models';
import { DEFAULT_VOUCHER } from './../../constants/voucher.constant';
import { DEFAULT_ORDER_DETAILS } from 'app/cart/constants/default-order-details.constant';

@Component({
  selector: 'app-cart-mobile',
  templateUrl: './cart-mobile.component.html',
  styleUrls: ['./cart-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@TakeUntilDestroy
export class CartMobileComponent implements OnInit, OnDestroy {
  public readonly orderDetails: OrderDetails = DEFAULT_ORDER_DETAILS;
  public readonly quantityChangeType: typeof QuantityChangeType =
    QuantityChangeType;
  public currentCart$: Observable<CartProduct[]> =
    this.cartService.getCurrentCart();
  public currentCartLength$: Observable<number> =
    this.cartService.getCartCount();
  public currentCartItemsTotalPrice: number = 0;
  public cartTotalPrice: number = 0;
  public cartReducedTotalPrice: number = 0;
  public activeVoucher: Voucher = DEFAULT_VOUCHER;

  private componentDestroy!: () => Observable<void>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.currentCart$
      .pipe(takeUntil(this.componentDestroy()))
      .subscribe(result => {
        const total = result.reduce((total, cv) => total + cv.totalPrice, 0);
        this.currentCartItemsTotalPrice = Number(total.toFixed(2));
        this.cartTotalPrice = Number(
          (
            this.currentCartItemsTotalPrice +
            this.orderDetails.shipping +
            this.orderDetails.importChanges
          ).toFixed(2)
        );
      });
  }

  ngOnDestroy(): void {}

  public onQuantityChange(
    changeType: QuantityChangeType,
    item: CartProduct
  ): void {
    const currentProduct = this.cartService
      .getCartData()
      .find(
        product =>
          product.name === item.name &&
          product.color === item.color &&
          product.size === item.size
      )!;

    const quantityChange = changeType === QuantityChangeType.Increase ? 1 : -1;
    const quantity = currentProduct.quantity + quantityChange;

    if (quantity > 0) {
      this.cartService.updateCart(currentProduct, quantityChange);
    }

    if (this.activeVoucher.label) {
      this.updateTotalPrice(this.activeVoucher);
    }
  }

  public onProductRemove(icon: HTMLElement, item: CartProduct): void {
    this.handleIcon(icon);
    this.cartService.removeProduct(item);
    if (this.activeVoucher.label) {
      this.updateTotalPrice(this.activeVoucher);
    }
  }

  public removeVoucher(): void {
    this.activeVoucher = DEFAULT_VOUCHER;
    this.cartReducedTotalPrice = 0;
  }

  public handleIcon(icon: HTMLElement): void {
    icon.classList.toggle('cart__product-icon--added');
  }

  public setVoucher(voucher: Voucher): void {
    this.activeVoucher = voucher;
    this.updateTotalPrice(this.activeVoucher);
  }

  private updateTotalPrice(voucher: Voucher): void {
    this.cartReducedTotalPrice = Number(
      (
        this.cartTotalPrice -
        (voucher.value / 100) * this.cartTotalPrice
      ).toFixed(2)
    );
  }
}
