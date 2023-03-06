import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Voucher } from 'app/cart/models';

@Component({
  selector: 'app-voucher-details',
  templateUrl: './voucher-details.component.html',
  styleUrls: ['./voucher-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoucherDetailsComponent {
  @Input() voucher!: Voucher;
  @Output() removeVoucher: EventEmitter<HTMLElement> =
    new EventEmitter<HTMLElement>();

  public onRemoveVoucher(icon: HTMLElement): void {
    this.removeVoucher.emit(icon);
    icon.classList.toggle('cart__product-icon--added');
  }
}
