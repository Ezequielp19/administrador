import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { administradorPageRoutingModule } from './administrador-routing.module';
import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    categoriesPageRoutingModule,
  ],
  declarations: [CategoriesComponent]
})
export class categoriesPageRoutingModule {}