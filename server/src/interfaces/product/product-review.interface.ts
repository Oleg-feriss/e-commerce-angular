import { User } from '../user';

export interface ProductReview {
  user: Pick<User, 'name' | 'surname' | 'photo'>;
  rating: number;
  feedback: string;
  images: string[];
}
