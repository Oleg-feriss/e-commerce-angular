import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedProductsSwiperComponent } from './related-products-swiper.component';

describe('RelatedProductsSwiperComponent', () => {
  let component: RelatedProductsSwiperComponent;
  let fixture: ComponentFixture<RelatedProductsSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedProductsSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedProductsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
