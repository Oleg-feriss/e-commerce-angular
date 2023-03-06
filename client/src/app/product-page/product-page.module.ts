import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import { SharedModule } from '@shared/shared.module';
import { ProductPageMobileComponent } from './components/product-page-mobile/product-page-mobile.component';
import { ProductPageDesktopComponent } from './components/product-page-desktop/product-page-desktop.component';
import { SwiperModule } from 'app/swiper/swiper.module';

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductPageMobileComponent,
    ProductPageDesktopComponent,
  ],
  imports: [CommonModule, ProductPageRoutingModule, SharedModule, SwiperModule],
})
export class ProductPageModule {}
