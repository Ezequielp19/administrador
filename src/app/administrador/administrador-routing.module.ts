import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ProfilePage } from './company.page';
import { AdministradorComponent } from './administrador.component';

const routes: Routes = [
  {
    path: '',
    component: AdministradorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class administradorPageRoutingModule {}
