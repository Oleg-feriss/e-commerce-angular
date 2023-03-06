import { Subcategory } from '.';

export interface Category {
  label: string;
  icon: string;
  name: string;
  subcategories?: Subcategory[];
}
