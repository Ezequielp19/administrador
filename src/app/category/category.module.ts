import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { administradorPageRoutingModule } from './administrador-routing.module';
import { CategoryComponent } from './category.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    categoryPageRoutingModule,
  ],
  declarations: [CategoryComponent]
})
export class categoryPageRoutingModule {}