import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay, Pagination } from 'swiper';

import { RelatedProduct } from '@product-page/models';
import { BESTSELLERS_SWIPER_SETTINGS } from '../../constants';

SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-bestseller-swiper',
  templateUrl: './bestseller-swiper.component.html',
  styleUrls: ['./bestseller-swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestsellerSwiperComponent {
  @Input() bestsellers: RelatedProduct[] = [];

  public readonly bestsellerSwiperSettings: SwiperOptions =
    BESTSELLERS_SWIPER_SETTINGS;
}
