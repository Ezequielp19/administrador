import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ProfilePage } from './company.page';
import { ProductsComponent} from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class productsPageRoutingModule {}