import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAddressModalComponent } from './delete-address-modal.component';

describe('DeleteAddressModalComponent', () => {
  let component: DeleteAddressModalComponent;
  let fixture: ComponentFixture<DeleteAddressModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAddressModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
