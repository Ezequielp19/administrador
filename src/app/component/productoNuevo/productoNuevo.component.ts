import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoProductoService } from 'src/app/services/productoNuevo.service'; 
import { AlertController } from '@ionic/angular'; 
import { Producto } from 'src/app/models/producto'; 

@Component({
  selector: 'app-productoNuevo',
  templateUrl: './productoNuevo.component.html',
  styleUrls: ['./productoNuevo.component.scss'],
})
export class ProductNuevoComponent implements OnInit {
  listProductosNew: Producto[]; // Declara la variable como un array de Productos

  constructor(private router: Router, private nuevosProductoService: NuevoProductoService,
    private alertCtrl: AlertController) {}

  ngOnInit(): void {
    this.obtenerProductosNuevos();
  }

  obtenerProductosNuevos() {
    this.nuevosProductoService.getAllProductoNuevo().subscribe(data => {
      console.log(data);
      this.listProductosNew = data;
    });
  }

  eliminarProductoNuevo(id: string) {
    this.nuevosProductoService.deleteProductoNuevo(id).subscribe(() => {
      this.obtenerProductosNuevos();
    });
  }
  
  goBack() {
    window.history.back();
  }

  navigateToPage1() {
    this.router.navigate(['/home']); // 
  }

  navigateToPage3() {
    this.router.navigate(['/lotery']); //
  }

  navigateToPage4() {
    this.router.navigate(['/productoNuevo']); //
  }
  
  navigateToPage5() {
    this.router.navigate(['/qSomo']); //
  }
  navigateToPage6() {
    this.router.navigate(['/event']); //
  }
  navigateToPage7() {
    this.router.navigate(['/categoria']); //
  }

async verDetalles2(id: string) {
  const productoSeleccionado = this.listProductosNew.find(prod => prod._id === id);

  const alert = await this.alertCtrl.create({
    header: productoSeleccionado.nombre,
    message: `
      <ion-img src="${productoSeleccionado.imagen}" alt="${productoSeleccionado.nombre}"></ion-img>
      <p>Precio: ${productoSeleccionado.precio}</p>
    `,
    buttons: ['OK']
  });

  await alert.present();
}
}
