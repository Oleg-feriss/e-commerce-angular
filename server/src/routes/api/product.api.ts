import { Router } from 'express';

import { productController } from '../../controllers';

export const productRouter: Router = Router();

productRouter.get('/', productController.getAllProducts);
productRouter.get(
  '/category/:category',
  productController.getProductsByCategory,
);
productRouter.get(
  '/subcategory/:subcategory',
  productController.getProductsBySubcategory,
);
