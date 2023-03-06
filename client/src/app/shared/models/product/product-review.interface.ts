import { UserReview } from '../user';

export interface ProductReview {
  user: UserReview;
  rating: number;
  feedback: string;
  images: string[];
}
