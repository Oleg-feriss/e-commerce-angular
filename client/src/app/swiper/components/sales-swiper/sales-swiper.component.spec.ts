import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSwiperComponent } from './sales-swiper.component';

describe('SalesSwiperComponent', () => {
  let component: SalesSwiperComponent;
  let fixture: ComponentFixture<SalesSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesSwiperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SalesSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
