import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ProfilePage } from './company.page';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class categoriesPageRoutingModule {}