import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CartService } from '@product-page/services/cart.service';
import { OrderDetails } from 'app/cart/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetailsComponent {
  @Input() public details!: OrderDetails;
  @Input() public totalPrice: number = 0;
  public currentCartCount$: Observable<number> =
    this.cartService.getCartCount();

  constructor(private cartService: CartService) {}
}
