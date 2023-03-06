import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';

import { RelatedProduct } from '@product-page/models';
import { RELATED_PRODUCTS_SWIPER_SETTINGS } from '../../constants';

@Component({
  selector: 'app-related-products-swiper',
  templateUrl: './related-products-swiper.component.html',
  styleUrls: ['./related-products-swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelatedProductsSwiperComponent {
  @Input() relatedProducts: RelatedProduct[] = [];

  public readonly relatedProductsSwiperSettings: SwiperOptions =
    RELATED_PRODUCTS_SWIPER_SETTINGS;
}
