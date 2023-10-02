import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { administradorPageRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    administradorPageRoutingModule,
  ],
  declarations: [AdministradorComponent]
})
export class administradorPageRoutingModule {}
