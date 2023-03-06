import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInUpTemplateComponent } from './sign-in-up-template.component';

describe('SignInUpTemplateComponent', () => {
  let component: SignInUpTemplateComponent;
  let fixture: ComponentFixture<SignInUpTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInUpTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInUpTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
