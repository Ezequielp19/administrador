import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { administradorPageRoutingModule } from './administrador-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    productPageRoutingModule,
  ],
  declarations: [ProductComponent]
})
export class productPageRoutingModule {}