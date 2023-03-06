import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';

import { CartProduct } from '@product-page/models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private currentCart$ = new BehaviorSubject<CartProduct[]>([]);

  constructor() {
    if (this.getCartData()) {
      this.currentCart$.next(this.getCartData());
    }
  }

  public getCartData(): CartProduct[] {
    return JSON.parse(localStorage.getItem('cart') as string);
  }

  public getCartCount(): Observable<number> {
    return this.currentCart$.pipe(map(cart => cart.length));
  }

  public getCurrentCart(): Observable<CartProduct[]> {
    return this.currentCart$.asObservable();
  }

  public updateCart(
    product: CartProduct,
    quantity: number = product.quantity
  ): void {
    const productInCart = this.currentCart$.value.find(
      item =>
        item.name === product.name &&
        item.color === product.color &&
        item.size === product.size
    );

    if (productInCart) {
      productInCart.quantity += quantity;
      productInCart.totalPrice = +(
        productInCart.price * productInCart.quantity
      ).toFixed(2);
      this.updateProduct(productInCart);
    } else {
      this.addProduct(product);
    }
  }

  private addProduct(newProduct: CartProduct): void {
    const cart = [...this.currentCart$.value, newProduct];
    this.saveCart(cart);
  }

  private updateProduct(updatedProduct: CartProduct): void {
    const cart = [...new Set([...this.currentCart$.value, updatedProduct])];
    this.saveCart(cart);
  }

  public removeProduct(product: CartProduct): void {
    const filteredCart = this.currentCart$.value.filter(
      item => !Object.is(item, product)
    );
    this.saveCart(filteredCart);
  }

  private saveCart(cart: CartProduct[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.currentCart$.next(cart);
  }
}
