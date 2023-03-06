import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageMobileComponent } from './product-page-mobile.component';

describe('ProductPageMobileComponent', () => {
  let component: ProductPageMobileComponent;
  let fixture: ComponentFixture<ProductPageMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductPageMobileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
