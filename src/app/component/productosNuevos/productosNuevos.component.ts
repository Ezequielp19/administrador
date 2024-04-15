import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NuevoProductoService } from 'src/app/services/productoNuevo.service';
import { NuevoProducto } from 'src/app/models/pNuevo';

@Component({
  selector: 'app-products',
  templateUrl: './productosNuevos.component.html',
  styleUrls: ['./productosNuevos.component.scss'],
})
export class NuevosProductsComponent implements OnInit {
  nuevosProductosForm: FormGroup;
  titulo = 'Crear Nuevo Producto';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private nuevoProductoService: NuevoProductoService,
              private activatedRoute: ActivatedRoute) {
    this.nuevosProductosForm = this.fb.group({
      nombre: ['', Validators.required],
      imagen: ['', Validators.required],
      precio: ['', Validators.required],
      descuento: [''],
      precioFinal: ['', Validators.required],
      
    });
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  goBack() {
    window.history.back();
  }

  agregarProductoNuevo() {
    const nuevoProducto: NuevoProducto = {
      nombre: this.nuevosProductosForm.get('nombre').value,
      imagen: this.nuevosProductosForm.get('imagen').value,
      precio: this.nuevosProductosForm.get('precio').value,
      descuento: this.nuevosProductosForm.get('descuento').value,
      precioFinal: this.nuevosProductosForm.get('precioFinal').value,
      
    };

    if (this.id !== null) {
      this.nuevoProductoService.updateProductoNuevo(this.id, nuevoProducto).subscribe(data => {
        this.router.navigate(['/']);
      });
    } else {
      this.nuevoProductoService.crearProductoNuevo(nuevoProducto).subscribe(data => {
        this.router.navigate(['/']);
      });
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Producto';
      this.nuevoProductoService.getProductoNuevoById(this.id).subscribe(data => {
        this.nuevosProductosForm.setValue({
          nombre: data.nombre,
          imagen: data.imagen,
          precio: data.precio,
          descuento: data.descuento,
          precioFinal: data.precioFinal,
        });
      });
    }
  }
}
