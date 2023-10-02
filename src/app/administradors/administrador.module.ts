import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { administradorPageRoutingModule } from './administrador-routing.module';
import { AdministradorsComponent } from './administradors.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    administradorsPageRoutingModule,
  ],
  declarations: [AdministradorsComponent]
})
export class administradorsPageRoutingModule {}
