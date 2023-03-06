import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, of, tap } from 'rxjs';

import { IconService } from '../../services/icon.service';
import { Path } from '../../models';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  public categories$ = this.productService.getCategoriesList().pipe(
    catchError(() => of([])),
    tap(data => {
      const icons = data.map(category => category.icon);
      this.iconService.registerIcons(icons, 'assets/icons/categories');
    })
  );
  public readonly moreCategoriesPath: Path = Path.Explore;

  constructor(
    private iconService: IconService,
    private productService: ProductService
  ) {}
}
