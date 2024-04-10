import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { ProductComponent } from './component/product/product.component';
import { ProductsComponent } from './component/products/products.component';
import { AdministradorComponent } from './component/administrador/administrador.component';
import { AdministradorsComponent } from './component/administradors/administradors.component';
import { CompanyComponent } from './component/company/company.component';
import { CompaniasComponent } from './component/companies/companies.component';
import { EmpleadoComponent } from './component/employee/employee.component';
import { EmpleadosComponent } from './component/employees/employees.component';
import { HomePage } from './component/home/home.page';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'products', component: ProductsComponent },
  {path: 'editar-product/:id', component: ProductsComponent },
  // {path: 'administrador', component: AdministradorComponent},
  // {path: 'administradors', component: AdministradorsComponent },
  // {path: 'editar-administrador/:id', component: AdministradorsComponent },
  {path: 'company', component: CompanyComponent},
  {path: 'companies', component: CompaniasComponent },
  {path: 'editar-compania/:id', component: CompaniasComponent },
  {path: 'employee', component: EmpleadoComponent},
  {path: 'employees', component: EmpleadosComponent },
  {path: 'editar-empleado/:id', component: EmpleadosComponent },
  {path: 'home', component: HomePage},
  // {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'product', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
