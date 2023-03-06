import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizesSwiperComponent } from './sizes-swiper.component';

describe('SizesSwiperComponent', () => {
  let component: SizesSwiperComponent;
  let fixture: ComponentFixture<SizesSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizesSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizesSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
