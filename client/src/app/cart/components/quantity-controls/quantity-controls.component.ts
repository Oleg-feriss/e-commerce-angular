import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CartProduct, QuantityChangeType } from '@product-page/models';

@Component({
  selector: 'app-quantity-controls',
  templateUrl: './quantity-controls.component.html',
  styleUrls: ['./quantity-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuantityControlsComponent {
  @Input() public product!: CartProduct;
  @Input() public quantityChangeType!: typeof QuantityChangeType;
  @Output() private quantityChange: EventEmitter<QuantityChangeType> =
    new EventEmitter<QuantityChangeType>();

  public onQuantityChange(changeType: QuantityChangeType): void {
    this.quantityChange.emit(changeType);
  }
}
