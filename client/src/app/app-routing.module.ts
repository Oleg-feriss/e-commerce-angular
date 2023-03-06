import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { UserGuard } from '@core/guards/user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./categories/categories.module').then(m => m.CategoriesModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then(m => m.RegisterModule),
    canActivate: [UserGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [UserGuard],
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('./explore/explore.module').then(m => m.ExploreModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then(m => m.AccountModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'product-page',
    loadChildren: () =>
      import('./product-page/product-page.module').then(
        m => m.ProductPageModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
