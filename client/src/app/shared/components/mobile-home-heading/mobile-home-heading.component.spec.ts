import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomeHeadingComponent } from './mobile-home-heading.component';

describe('MobileHomeHeadingComponent', () => {
  let component: MobileHomeHeadingComponent;
  let fixture: ComponentFixture<MobileHomeHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHomeHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileHomeHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
