import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsSwiperComponent } from './colors-swiper.component';

describe('ColorsSwiperComponent', () => {
  let component: ColorsSwiperComponent;
  let fixture: ComponentFixture<ColorsSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
