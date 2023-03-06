import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, takeUntil } from 'rxjs';

import { UserAddress } from '@shared/models';
import { IconService } from '@shared/services/icon.service';
import { LocalService } from '@shared/services/local.service';
import { DeleteAddressModalComponent } from './components/delete-address-modal/delete-address-modal.component';
import { ADDRESS_ICONS } from './constants/';
import { TakeUntilDestroy } from '@core/decorators/take-until-destroy';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@TakeUntilDestroy
export class AddressComponent implements OnInit, OnDestroy {
  public userAddresses: UserAddress[] = [];
  private componentDestroy!: () => Observable<void>;

  constructor(
    private iconService: IconService,
    private localService: LocalService,
    private changeDetector: ChangeDetectorRef,
    public deleteDialog: MatDialog
  ) {
    this.iconService.registerIcons(ADDRESS_ICONS, 'assets/icons');
  }

  ngOnInit(): void {
    this.loadUserAddresses();
  }

  ngOnDestroy(): void {}

  public onDeleteAddress(userAddress: UserAddress): void {
    this.deleteDialog
      .open(DeleteAddressModalComponent, {
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        panelClass: 'fullscreen-dialog',
        data: userAddress,
      })
      .afterClosed()
      .pipe(takeUntil(this.componentDestroy()))
      .subscribe(() => {
        this.loadUserAddresses();

        this.changeDetector.markForCheck();
      });
  }

  private loadUserAddresses(): void {
    this.userAddresses =
      JSON.parse(this.localService.getData('userAddresses')) || [];
  }
}
