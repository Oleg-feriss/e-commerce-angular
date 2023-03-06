import { NextFunction, Request, Response } from 'express';

import { productService } from '../services';
import { HttpCode } from '../common/enums';

export class ProductController {
  async getAllProducts(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const products = await productService.getAllProducts();
      res.send(products).status(HttpCode.OK);
    } catch (error) {
      next(error);
    }
  }

  async getProductsByCategory(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { category } = req.params;
      const products = await productService.getProductsByCategory(category);

      res.send(products).status(HttpCode.OK);
    } catch (error) {
      next(error);
    }
  }

  async getProductsBySubcategory(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { subcategory } = req.params;
      const subcategoryProducts = await productService.getProductsBySubcategory(
        subcategory,
      );

      res.send(subcategoryProducts).status(HttpCode.OK);
    } catch (error) {
      next(error);
    }
  }
}
