import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellerSwiperComponent } from './bestseller-swiper.component';

describe('BestsellerSwiperComponent', () => {
  let component: BestsellerSwiperComponent;
  let fixture: ComponentFixture<BestsellerSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsellerSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestsellerSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
