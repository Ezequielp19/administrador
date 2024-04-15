import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {

  listCategorias: Categoria[]; // Declara la variable como un array de Productos

  constructor(private router: Router, private categoriaService: CategoriaService,
  private alertCtrl: AlertController ) {}

  ngOnInit(): void {
    this.obtenerCategoria();
  }

  obtenerCategoria() {
    this.categoriaService.getAllCategorias().subscribe(data => {
      console.log(data);
      this.listCategorias = data;
    });
  }

  eliminarCategoria(id: string) {
    this.categoriaService.deleteCategoria(id).subscribe(() => {
      this.obtenerCategoria();
    });
  }
  
  goBack() {
    window.history.back();
  }

  navigateToPage1() {
    this.router.navigate(['/home']); // 
  }

  navigateToPage3() {
    this.router.navigate(['/product']); //
  }

  navigateToPage4() {
    this.router.navigate(['/productoNuevo']); //
  }
  
  navigateToPage5() {
    this.router.navigate(['/event']); //
  }
  navigateToPage6() {
    this.router.navigate(['/lotery']); //
  }
  navigateToPage7() {
    this.router.navigate(['/qSomo']); //
  }

  navigateToPage8() {
    this.router.navigate(['/categorias']); //
  }

async verDetalles2(id: string) {
  const categoriaSeleccionada = this.listCategorias.find(cat => cat._id === id);

  const alert = await this.alertCtrl.create({
    header: categoriaSeleccionada.nombre,
    message: `
      <ion-img src="${categoriaSeleccionada.imagen}" alt="${categoriaSeleccionada.nombre}"></ion-img>
    `,
    buttons: ['OK']
  });

  await alert.present();
}
}