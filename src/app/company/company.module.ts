import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { administradorPageRoutingModule } from './administrador-routing.module';
import { CompanyComponent } from './company.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    companyPageRoutingModule,
  ],
  declarations: [CompanyComponent]
})
export class companyPageRoutingModule {}