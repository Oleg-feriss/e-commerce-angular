import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconService } from '@shared/services/icon.service';
import { ACCOUNT_ICONS } from './constants/';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {
  public get isRouteSelected(): boolean {
    return !this.router.url.endsWith('/account');
  }

  constructor(
    private iconService: IconService,
    private router: Router,
    private userService: UserService
  ) {
    this.iconService.registerIcons(ACCOUNT_ICONS, 'assets/icons');
  }

  public onLogout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
