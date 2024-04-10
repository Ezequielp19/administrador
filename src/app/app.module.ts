import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { ProductComponent } from './component/product/product.component';
import { ProductsComponent } from './component/products/products.component';
// import { AdministradorComponent } from './component/administrador/administrador.component';
// import { AdministradorsComponent } from './component/administradors/administradors.component';
import { CompanyComponent } from './component/company/company.component';
import { CompaniasComponent } from './component/companies/companies.component';
import { EmpleadoComponent } from "./component/employee/employee.component";
import { EmpleadosComponent } from "./component/employees/employees.component";



@NgModule({
  declarations: [AppComponent,
  ProductComponent,
  ProductsComponent,
  // AdministradorComponent,
  // AdministradorsComponent,
  CompanyComponent,
  CompaniasComponent,
  EmpleadoComponent,
  EmpleadosComponent],

  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
