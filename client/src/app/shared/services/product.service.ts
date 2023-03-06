import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { API_URLS, CATEGORIES_LIST } from '../constants';
import { Category, Product } from './../models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URLS.PRODUCT.ALL_PRODUCTS);
  }

  public getCategoriesList(): Observable<Category[]> {
    return of(CATEGORIES_LIST);
  }

  public getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${API_URLS.PRODUCT.CATEGORY_PRODUCTS}${category}`
    );
  }

  public getProductsBySubcategory(subcategory: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${API_URLS.PRODUCT.SUBCATEGORY_PRODUCTS}${subcategory}`
    );
  }
}
