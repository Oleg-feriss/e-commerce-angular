import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, of, tap } from 'rxjs';

import { IconService } from '@shared/services/icon.service';
import { ProductService } from '@shared/services/product.service';
import { Category } from '@shared/models';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExploreComponent {
  public categories$ = this.productService.getCategoriesList().pipe(
    catchError(() => of([])),
    tap(data => this.registerIcons(data))
  );

  constructor(
    private iconService: IconService,
    private productService: ProductService
  ) {}

  private registerIcons(data: Category[]): void {
    const icons = [
      ...new Set(
        data
          .flatMap(category => category.subcategories)
          .map(subcategory => subcategory?.icon)
      ),
    ];

    this.iconService.registerIcons(
      icons as string[],
      'assets/icons/categories'
    );
  }
}
