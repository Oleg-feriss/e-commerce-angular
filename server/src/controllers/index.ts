import { AuthController } from './auth.controller';
import { ProductController } from './product.controller';
import { UserController } from './user.controller';

const userController = new UserController();
const authController = new AuthController();
const productController = new ProductController();

export { userController, authController, productController };
