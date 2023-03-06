import { ProductReview } from '.';

export interface Product {
  category: string;
  subcategory: string;
  name: string;
  brand: string;
  description: string;
  colors: string[];
  price: number;
  rating: number;
  images: string[];
  sizes: number[];
  reviews: ProductReview[];
}
