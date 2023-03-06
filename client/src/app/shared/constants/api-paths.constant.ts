import { environment } from 'environments/environment';

export const API_URLS = {
  USER: `${environment.apiUrl}/user/`,
  AUTH: `${environment.apiUrl}/auth/`,
  PRODUCT: {
    ALL_PRODUCTS: `${environment.apiUrl}/product/`,
    CATEGORY_PRODUCTS: `${environment.apiUrl}/product/category/`,
    SUBCATEGORY_PRODUCTS: `${environment.apiUrl}/product/subcategory/`,
  },
} as const;
