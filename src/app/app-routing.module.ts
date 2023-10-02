import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./userslist/userslist.module').then( m => m.UserslistPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./administrador/administrador-routing.module').then( m => m.administradorPageRoutingModule)
  },
  {
    path: 'administradors',
    loadChildren: () => import('./administradors/administradors-routing.module').then( m => m.administradorsPageRoutingModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories-routing.module').then( m => m.categoriesPageRoutingModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category-routing.module').then( m => m.categoryPageRoutingModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./companies/companies-routing.module').then( m => m.companiesPageRoutingModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company-routing.module').then( m => m.companyPageRoutingModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee-routing.module').then( m => m.employeePageRoutingModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees-routing.module').then( m => m.employeesPageRoutingModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product-routing.module').then( m => m.productPageRoutingModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products-routing.module').then( m => m.productsPageRoutingModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
