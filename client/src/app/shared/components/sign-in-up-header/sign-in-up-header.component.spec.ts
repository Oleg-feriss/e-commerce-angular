import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInUpHeaderComponent } from './sign-in-up-header.component';

describe('SignInUpHeaderComponent', () => {
  let component: SignInUpHeaderComponent;
  let fixture: ComponentFixture<SignInUpHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInUpHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInUpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
