import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GLOBAL_ICONS } from '@shared/constants';
import { IconService } from '@shared/services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private iconService: IconService, private router: Router) {
    this.iconService.registerIcons(GLOBAL_ICONS, 'assets/icons');
  }

  public shouldHideHeader(): boolean {
    return this.router.url === '/login' || this.router.url === '/register';
  }
}
