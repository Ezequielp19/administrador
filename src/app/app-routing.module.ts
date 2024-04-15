import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomePage } from './component/home/home.page';
import { ProductComponent } from './component/product/product.component';
import { ProductsComponent } from './component/products/products.component';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { CategoriaComponent } from './component/categoria/categoria.component';
import { SorteoComponent } from './component/lotery/lotery.component';
import { SorteosComponent } from './component/loteryes/loteryes.component';
import { ComentarioComponent } from './component/comment/comment.component';
import { CommentsComponent } from './component/comments/comments.component';
import { EventComponent } from './component/event/event.component';
import { EventsComponent } from './component/events/events.component';
import { SomoComponent } from './component/qSomo/quienesSomo.component';
import { SomosComponent } from './component/qSomos/quienesSomos.component';
import { NuevosProductsComponent } from './component/productosNuevos/productosNuevos.component';
import { ProductNuevoComponent } from './component/productoNuevo/productoNuevo.component';
// import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'products', component: ProductsComponent },
  {path: 'editar-product/:id', component: ProductsComponent },
  {path: 'categorias', component: CategoriasComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'editar-categoria/:id', component: CategoriasComponent },
  {path: 'comment', component: ComentarioComponent},
  {path: 'comments', component: CommentsComponent },
  {path: 'editar-comentario/:id', component:CommentsComponent },
  {path: 'lotery', component: SorteoComponent},
  {path: 'loteryes', component: SorteosComponent },
  {path: 'editar-sorteo/:id', component: SorteosComponent },
  {path: 'event', component: EventComponent},
  {path: 'events', component: EventsComponent },
  {path: 'editar-events/:id', component: EventsComponent },
  {path: 'qSomo', component: SomoComponent},
  {path: 'qSomos', component: SomosComponent },
  {path: 'editar-somos/:id', component: SomosComponent },
  {path: 'home', component: HomePage},
  {path: 'productoNuevo', component: ProductNuevoComponent},
  {path: 'productosNuevo', component: NuevosProductsComponent},
  {path: 'editar-productoNuevo/:id', component: NuevosProductsComponent},
  // {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
