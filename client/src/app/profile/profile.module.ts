import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '@shared/shared.module';
import { ChangeNameComponent } from './change-name/change-name.component';
import { ChangeProfilePhotoComponent } from './change-profile-photo/change-profile-photo.component';
import { ChangeGenderComponent } from './change-gender/change-gender.component';
import { ChangeBirthdayComponent } from './change-birthday/change-birthday.component';
import { ChangePhoneNumberComponent } from './change-phone-number/change-phone-number.component';
import { ChangeEmailAddressComponent } from './change-email-address/change-email-address.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ChangeNameComponent,
    ChangeProfilePhotoComponent,
    ChangeGenderComponent,
    ChangeBirthdayComponent,
    ChangePhoneNumberComponent,
    ChangeEmailAddressComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
