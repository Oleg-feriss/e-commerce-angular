import { Product } from '../../interfaces';
import productModel from '../models/product.model';

export class ProductRepository {
  async findAll(): Promise<Product[]> {
    return await productModel.find();
  }

  async findProductsByCategory(category: string): Promise<Product[]> {
    const productsByCategory = await productModel
      .find()
      .where('category')
      .equals(category);

    return productsByCategory;
  }

  async findProductsBySubcategory(subcategory: string): Promise<Product[]> {
    const productsBySubcategory = await productModel
      .find()
      .where('subcategory')
      .equals(subcategory);

    return productsBySubcategory;
  }
}
