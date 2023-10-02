import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { administradorPageRoutingModule } from './administrador-routing.module';
import { EmployeeComponent } from './employee.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    employeePageRoutingModule,
  ],
  declarations: [EmployeeComponent]
})
export class employeePageRoutingModule {}