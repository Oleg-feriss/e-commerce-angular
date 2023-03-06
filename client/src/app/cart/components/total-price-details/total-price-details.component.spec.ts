import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPriceDetailsComponent } from './total-price-details.component';

describe('TotalPriceDetailsComponent', () => {
  let component: TotalPriceDetailsComponent;
  let fixture: ComponentFixture<TotalPriceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalPriceDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TotalPriceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
