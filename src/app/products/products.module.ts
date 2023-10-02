import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { administradorPageRoutingModule } from './administrador-routing.module';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    productsPageRoutingModule,
  ],
  declarations: [ProductsComponent]
})
export class productsPageRoutingModule {}