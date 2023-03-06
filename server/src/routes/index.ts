import { Application } from 'express';
import { authRouter, productRouter, userRouter } from './api';

class AppRouter {
  constructor(private app: Application) {}
  init(): void {
    this.app.use('/api/user', userRouter);
    this.app.use('/api/auth', authRouter);
    this.app.use('/api/product', productRouter);
  }
}

export default AppRouter;
