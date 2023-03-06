import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageDesktopComponent } from './product-page-desktop.component';

describe('ProductPageDesktopComponent', () => {
  let component: ProductPageDesktopComponent;
  let fixture: ComponentFixture<ProductPageDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductPageDesktopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
