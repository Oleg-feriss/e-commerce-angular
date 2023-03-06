import { ProductRepository } from './product.repository';
import { UserRepository } from './user.repository';

const userRepository = new UserRepository();
const productRepository = new ProductRepository();

export { userRepository, productRepository };
