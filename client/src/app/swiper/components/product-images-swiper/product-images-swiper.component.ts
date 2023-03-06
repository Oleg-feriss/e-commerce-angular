import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import Swiper, { Pagination, SwiperOptions } from 'swiper';
import SwiperCore from 'swiper';

import { PRODUCT_IMAGES_SWIPER_SETTINGS } from '../../constants';

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-product-images-swiper',
  templateUrl: './product-images-swiper.component.html',
  styleUrls: ['./product-images-swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductImagesSwiperComponent {
  @Input() productImages: string[] = [];

  public thumbsSwiper!: Swiper;
  public readonly productImagesSwiperSettings: SwiperOptions =
    PRODUCT_IMAGES_SWIPER_SETTINGS;
}
