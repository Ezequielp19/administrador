import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/producto.service'; 
import { AlertController } from '@ionic/angular'; 
import { Producto } from 'src/app/models/producto'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  listProductos: Producto[]; // Declara la variable como un array de Productos

  constructor(private router: Router, private productService: ProductService,
    private alertCtrl: AlertController) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productService.getAllProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    });
  }

  eliminarProducto(id: string) {
    this.productService.deleteProducto(id).subscribe(() => {
      this.obtenerProductos();
    });
  }
  
  goBack() {
    window.history.back();
  }

  navigateToPage1() {
    this.router.navigate(['/home']);
  }

  navigateToPage3() {
    this.router.navigate(['/administrador']);
  }

  navigateToPage4() {
    this.router.navigate(['/employee']);
  }

  navigateToPage5() {
    this.router.navigate(['/company']);
  }

  navigateToPage6() {
    this.router.navigate(['/products']);
  }

async verDetalles2(id: string) {
  const productoSeleccionado = this.listProductos.find(prod => prod._id === id);

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
