import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCardDialogComponent } from './remove-card-dialog.component';

describe('RemoveCardDialogComponent', () => {
  let component: RemoveCardDialogComponent;
  let fixture: ComponentFixture<RemoveCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveCardDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
