import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-price-details',
  templateUrl: './total-price-details.component.html',
  styleUrls: ['./total-price-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalPriceDetailsComponent {
  @Input() public totalPrice: number = 0;
  @Input() public reducedPrice!: number;
}
