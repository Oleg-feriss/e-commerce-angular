import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

import { MainHeaderIcon } from '@core/models';
import { CartService } from '@product-page/services/cart.service';
import { SelectOption } from '@shared/models';
import { IconService } from '@shared/services/icon.service';
import { CURRENCY_SELECT_OPTIONS, LANGUAGE_SELECT_OPTIONS } from '../constants';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainHeaderComponent {
  public languages: SelectOption[] = LANGUAGE_SELECT_OPTIONS;
  public currencies: SelectOption[] = CURRENCY_SELECT_OPTIONS;
  public desktopFormGroup = new FormGroup({
    language: new FormControl(`${this.languages[0].value}`),
    currency: new FormControl(`${this.currencies[0].value}`),
  });
  public mobileFormGroup = new FormGroup({
    products: new FormControl(''),
  });
  public shouldShowMobileSearchHeader$ = this.router.events.pipe(
    filter(event => event instanceof NavigationStart),
    map(event => event as NavigationStart),
    map(event => event.url === '/' || event.url === '/explore')
  );
  public readonly cartCount$: Observable<number> =
    this.cartService.getCartCount();

  constructor(
    private router: Router,
    private iconService: IconService,
    private cartService: CartService
  ) {
    this.iconService.registerIcons(
      Object.values(MainHeaderIcon),
      'assets/icons/main-header'
    );
  }
}
