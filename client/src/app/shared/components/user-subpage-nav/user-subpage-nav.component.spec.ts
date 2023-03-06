import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubpageNavComponent } from './user-subpage-nav.component';

describe('UserSubpageNavComponent', () => {
  let component: UserSubpageNavComponent;
  let fixture: ComponentFixture<UserSubpageNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSubpageNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSubpageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
