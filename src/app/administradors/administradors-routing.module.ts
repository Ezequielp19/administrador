import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ProfilePage } from './company.page';
import { AdministradorsComponent } from './administradors.component';

const routes: Routes = [
  {
    path: '',
    component: AdministradorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class administradorsPageRoutingModule {}