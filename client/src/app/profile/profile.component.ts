import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { IconService } from '@shared/services/icon.service';
import { UserService } from '@shared/services/user.service';
import { User } from '@shared/models';
import { PROFILE_ICONS, DEFAULT_USER_PROFILE_PHOTO } from './constants';
import { DATE_FORMAT } from './change-birthday/constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  public userImage: string = '';
  public currentUser!: User;
  public currentUserBirthdayDate: string = '';

  constructor(
    private iconService: IconService,
    private userService: UserService
  ) {
    this.iconService.registerIcons(PROFILE_ICONS, 'assets/icons');
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getUserData();
    this.userImage = this.currentUser.photo ?? DEFAULT_USER_PROFILE_PHOTO;
    if (this.currentUser.birthday) {
      const formatedUserDate = moment(this.currentUser.birthday).format(
        DATE_FORMAT
      );
      this.currentUserBirthdayDate = formatedUserDate;
    } else {
      this.currentUserBirthdayDate = 'set birthday date';
    }
  }
}
