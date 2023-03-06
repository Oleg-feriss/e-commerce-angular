export interface ProductReview {
  user: {
    name: string;
    surname: string;
    photo: string;
  };
  rating: number;
  description: string;
  images: string[];
}
