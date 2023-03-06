import { Product } from '../interfaces';
import { productRepository } from '../data/repositories';

export class ProductService {
  public async getAllProducts(): Promise<Product[]> {
    return await productRepository.findAll();
  }

  public async getProductsByCategory(category: string): Promise<Product[]> {
    return await productRepository.findProductsByCategory(category);
  }

  public async getProductsBySubcategory(
    subcategory: string,
  ): Promise<Product[]> {
    return await productRepository.findProductsBySubcategory(subcategory);
  }
}
