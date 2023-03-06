import { AuthService } from './auth.service';
import { EncryptService } from './encrypt.service';
import { ProductService } from './product.service';
import { TokenService } from './token.service';
import { UserService } from './user.service';

const userService = new UserService();
const encryptService = new EncryptService();
const tokenService = new TokenService();
const authService = new AuthService();
const productService = new ProductService();

export {
  userService,
  encryptService,
  tokenService,
  authService,
  productService,
};
