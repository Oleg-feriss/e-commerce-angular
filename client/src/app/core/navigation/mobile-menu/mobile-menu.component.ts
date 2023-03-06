import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Direction, Category } from '@shared/models';
import { IconService } from '@shared/services/icon.service';
import { Icons } from '@core/models';
import { MOBILE_MENU_LIST } from 'app/home/constants';
import { CartService } from '@product-page/services/cart.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMenuComponent {
  public readonly menuListItems: Category[] = MOBILE_MENU_LIST;
  public readonly columnDirection: Direction = Direction.Column;
  public readonly cartCount$: Observable<number> =
    this.cartService.getCartCount();

  constructor(
    private iconService: IconService,
    private cartService: CartService
  ) {
    this.iconService.registerIcons(Object.values(Icons), 'assets/icons');
  }
}
