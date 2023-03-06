import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserAddress } from '@shared/models';
import { IconService } from '@shared/services/icon.service';
import { LocalService } from '@shared/services/local.service';
import { ADDRESS_ICONS } from 'app/address/constants/';

@Component({
  selector: 'app-delete-address-modal',
  templateUrl: './delete-address-modal.component.html',
  styleUrls: ['./delete-address-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteAddressModalComponent implements OnInit {
  public userAddresses: UserAddress[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public userAddress: UserAddress,
    private iconService: IconService,
    private localService: LocalService,
    public dialogRef: MatDialogRef<DeleteAddressModalComponent>
  ) {
    this.iconService.registerIcons(ADDRESS_ICONS, 'assets/icons');
  }

  ngOnInit(): void {
    this.userAddresses =
      JSON.parse(this.localService.getData('userAddresses') as string) || [];
  }

  public onCloseModal(): void {
    this.dialogRef.close();
  }

  public onDelete(): void {
    this.userAddresses = this.userAddresses.filter(
      address => address.id !== this.userAddress.id
    );

    this.localService.saveData(
      'userAddresses',
      JSON.stringify(this.userAddresses)
    );

    this.dialogRef.close();
  }
}
