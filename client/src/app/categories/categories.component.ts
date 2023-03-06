import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, takeUntil } from 'rxjs';

import { ProductService } from '@shared/services/product.service';
import { Product } from '@shared/models';
import { TakeUntilDestroy } from '@core/decorators/take-until-destroy';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@TakeUntilDestroy
export class CategoriesComponent implements OnInit, OnDestroy {
  public category: string = '';
  public products: Product[] = [];

  private componentDestroy!: () => Observable<void>;

  constructor(
    private router: Router,
    private productService: ProductService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.category = this.router.url.split('/').pop() as string;

    this.productService
      .getProductsByCategory(this.category)
      .pipe(takeUntil(this.componentDestroy()))
      .subscribe(data => {
        this.products = data;

        this.changeDetectorRef.markForCheck();
      });
  }

  ngOnDestroy(): void {}
}
