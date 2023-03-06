import { ProductReview } from '.';

export interface Product {
  name: string;
  images: string[];
  price: number;
  rating: number;
  sizes: number[];
  colors: string[];
  description: string;
  reviews: ProductReview[];
}
