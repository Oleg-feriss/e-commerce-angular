import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './navigation/header/header.component';
import { MobileMenuComponent } from './navigation/mobile-menu/mobile-menu.component';
import { SharedModule } from '@shared/shared.module';
import { MainHeaderComponent } from './navigation/main-header/main-header.component';

@NgModule({
  declarations: [HeaderComponent, MobileMenuComponent, MainHeaderComponent],
  exports: [HeaderComponent, MobileMenuComponent, MainHeaderComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class CoreModule {}
