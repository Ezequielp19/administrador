import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { administradorPageRoutingModule } from './administrador-routing.module';
import { CompaniesComponent } from './companies.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    companiesPageRoutingModule,
  ],
  declarations: [CompaniesComponent]
})
export class companiesPageRoutingModule {}