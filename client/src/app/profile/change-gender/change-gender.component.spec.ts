import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '@shared/services/user.service';
import { USER_DATA_MOCK } from '../mocks/user-data.mock';
import { ChangeGenderComponent } from './change-gender.component';

fdescribe('ChangeGenderComponent', () => {
  let component: ChangeGenderComponent;
  let fixture: ComponentFixture<ChangeGenderComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    userServiceSpy = jasmine.createSpyObj<UserService>('UserService', [
      'getUserData',
    ]);

    userServiceSpy.getUserData.and.returnValue(USER_DATA_MOCK);

    await TestBed.configureTestingModule({
      declarations: [ChangeGenderComponent],
      providers: [{ provide: UserService, useValue: userServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeGenderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should display current gender in the label when user has previously set one', () => {
    // Arrange
    const currentUser = {
      _id: '12345',
      name: 'Jon',
      surname: 'Snow',
      email: 'jsnow@got.com',
      passwordHash: 'Th3N0RtHR3m#mB3r5',
      gender: 'male',
    };
    userServiceSpy.getUserData.and.returnValue(currentUser);

    // Act
    component.ngOnInit();

    // Assert
    expect(component.selectLabel).toBe(`Current gender: male`);
  });

  it('should display "Choose a gender" when user has not previously set gender', () => {
    // Arrange
    const currentUser = {
      _id: '12345',
      name: 'Jon',
      surname: 'Snow',
      email: 'jsnow@got.com',
      passwordHash: 'Th3N0RtHR3m#mB3r5',
    };
    userServiceSpy.getUserData.and.returnValue(currentUser);

    // Act
    component.ngOnInit();

    // Assert
    expect(component.selectLabel).toBe('Choose a gender');
  });
});
