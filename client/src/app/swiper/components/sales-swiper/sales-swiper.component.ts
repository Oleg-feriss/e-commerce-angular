import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EffectFade, SwiperOptions } from 'swiper';
import SwiperCore from 'swiper';

import { SALES } from 'app/home/models';
import { SALES_SWIPER_SETTINGS } from 'app/swiper/constants';

SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-sales-swiper',
  templateUrl: './sales-swiper.component.html',
  styleUrls: ['./sales-swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesSwiperComponent {
  @Input() sales: SALES[] = [];

  public readonly salesSwiperSettings: SwiperOptions = SALES_SWIPER_SETTINGS;
}
