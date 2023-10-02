import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ProfilePage } from './company.page';
import { CompaniesComponent } from './companies.component';

const routes: Routes = [
  {
    path: '',
    component: CompaniesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class companiesPageRoutingModule {}