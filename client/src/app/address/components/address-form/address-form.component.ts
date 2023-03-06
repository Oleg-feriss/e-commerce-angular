import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, takeUntil } from 'rxjs';

import { getRandomId } from '@shared/helpers/get-random-id.helper';
import { UserAddress, InputField } from '@shared/models';
import { LocalService } from '@shared/services/local.service';
import { AddressCustomValidators } from '@shared/validators/address-custom-validators.validator';
import {
  ADDRESS_FIELDS,
  COUNTRY_FIELD,
  COUNTRIES,
} from 'app/address/constants/';
import { AddressFormBuilder } from 'app/address/helpers/address-form-builder.helper';
import { PhoneNumberPipe } from 'app/address/pipes/phone-number.pipe';
import { ZipCodePipe } from 'app/address/pipes/zip-code.pipe';
import { TakeUntilDestroy } from '@core/decorators/take-until-destroy';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  providers: [ZipCodePipe, PhoneNumberPipe],
})
@TakeUntilDestroy
export class AddressFormComponent implements OnInit, OnDestroy {
  public readonly formFields: InputField[] = ADDRESS_FIELDS;
  public readonly countryFormField: InputField = COUNTRY_FIELD;
  public readonly formGroup = AddressFormBuilder.getDefaultForm(
    this.addressCustomValidators
  );
  public readonly options: string[] = COUNTRIES;
  public userAddresses: UserAddress[] = [];
  public editedAddress?: UserAddress;
  private componentDestroy!: () => Observable<void>;

  constructor(
    private readonly addressCustomValidators: AddressCustomValidators,
    private zipCodeMask: ZipCodePipe,
    private phoneNumberMask: PhoneNumberPipe,
    private localService: LocalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userAddresses =
      JSON.parse(this.localService.getData('userAddresses')) || [];

    this.route.queryParams
      .pipe(takeUntil(this.componentDestroy()))
      .subscribe((params: Params) => this.tryLoadingEditedAddress(params));

    this.formGroup
      .get('zipCode')
      ?.valueChanges.pipe(takeUntil(this.componentDestroy()))
      .subscribe(value => {
        const maskedValue = this.zipCodeMask.transform(value);

        if (value !== maskedValue) {
          this.formGroup.patchValue({ zipCode: maskedValue });
        }
      });

    this.formGroup.get('phoneNumber')?.valueChanges.subscribe(value => {
      const maskedValue = this.phoneNumberMask.transform(value);

      if (value !== maskedValue) {
        this.formGroup.patchValue({ phoneNumber: maskedValue });
      }
    });
  }

  ngOnDestroy(): void {}

  public onSubmit(): void {
    if (this.editedAddress) {
      this.submitEdit();
    } else {
      this.submitAdd();
    }
  }

  private submitEdit(): void {
    const updatedAddress = this.userAddresses.map(address =>
      address.id === this.editedAddress?.id
        ? { ...address, ...this.formGroup.value }
        : address
    );

    this.saveChanges(updatedAddress);
  }

  private submitAdd(): void {
    const id = getRandomId();

    this.saveChanges([...this.userAddresses, { id, ...this.formGroup.value }]);
  }

  private saveChanges(addresses: UserAddress[]): void {
    this.localService.saveData('userAddresses', JSON.stringify(addresses));

    this.router.navigate(['/account/address']);
  }

  private tryLoadingEditedAddress(params: Params): void {
    this.editedAddress = this.userAddresses.find(
      address => address.id === params['id']
    );

    if (this.editedAddress) {
      this.formGroup.patchValue(this.editedAddress);
    }
  }
}
