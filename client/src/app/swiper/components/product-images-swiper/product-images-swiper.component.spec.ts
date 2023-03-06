import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImagesSwiperComponent } from './product-images-swiper.component';

describe('ProductImagesSwiperComponent', () => {
  let component: ProductImagesSwiperComponent;
  let fixture: ComponentFixture<ProductImagesSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImagesSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImagesSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
