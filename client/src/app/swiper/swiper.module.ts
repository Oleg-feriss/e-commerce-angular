import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule as Swiper } from 'swiper/angular';
import { ColorsSwiperComponent } from './components/colors-swiper/colors-swiper.component';
import { SizesSwiperComponent } from './components/sizes-swiper/sizes-swiper.component';
import { ProductImagesSwiperComponent } from './components/product-images-swiper/product-images-swiper.component';
import { RelatedProductsSwiperComponent } from './components/related-products-swiper/related-products-swiper.component';
import { BestsellerSwiperComponent } from './components/bestseller-swiper/bestseller-swiper.component';
import { SharedModule } from '@shared/shared.module';
import { SalesSwiperComponent } from './components/sales-swiper/sales-swiper.component';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [
    ColorsSwiperComponent,
    SizesSwiperComponent,
    ProductImagesSwiperComponent,
    RelatedProductsSwiperComponent,
    BestsellerSwiperComponent,
    SalesSwiperComponent,
    TimerComponent,
  ],
  imports: [CommonModule, Swiper, SharedModule],
  exports: [
    Swiper,
    ColorsSwiperComponent,
    SizesSwiperComponent,
    ProductImagesSwiperComponent,
    RelatedProductsSwiperComponent,
    BestsellerSwiperComponent,
    SalesSwiperComponent,
    TimerComponent,
  ],
})
export class SwiperModule {}
