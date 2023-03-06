import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeBirthdayComponent } from './change-birthday/change-birthday.component';
import { ChangeNameComponent } from './change-name/change-name.component';
import { ChangePhoneNumberComponent } from './change-phone-number/change-phone-number.component';
import { ChangeProfilePhotoComponent } from './change-profile-photo/change-profile-photo.component';
import { ProfileComponent } from './profile.component';
import { ChangeGenderComponent } from './change-gender/change-gender.component';
import { ChangeEmailAddressComponent } from './change-email-address/change-email-address.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'change-name', component: ChangeNameComponent },
  { path: 'change-profile-photo', component: ChangeProfilePhotoComponent },
  { path: 'change-gender', component: ChangeGenderComponent },
  { path: 'change-birthday', component: ChangeBirthdayComponent },
  { path: 'change-phone-number', component: ChangePhoneNumberComponent },
  { path: 'change-email-address', component: ChangeEmailAddressComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
