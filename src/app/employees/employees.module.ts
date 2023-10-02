import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { administradorPageRoutingModule } from './administrador-routing.module';
import { EmployeesComponent } from './employees.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    employeesPageRoutingModule,
  ],
  declarations: [EmployeesComponent]
})
export class employeesPageRoutingModule {}