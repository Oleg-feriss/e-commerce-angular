import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, of } from 'rxjs';

import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public menuItems$ = this.productService
    .getCategoriesList()
    .pipe(catchError(() => of([])));

  constructor(private productService: ProductService) {}
}
