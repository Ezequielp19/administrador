import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productoForm: FormGroup;
  titulo = 'Crear Producto';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.productoForm = this.fb.group({
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

  agregarProducto() {
    const producto: Producto = {
      nombre: this.productoForm.get('nombre').value,
      imagen: this.productoForm.get('imagen').value,
      precio: this.productoForm.get('precio').value,
      descuento: this.productoForm.get('descuento').value,
      precioFinal: this.productoForm.get('precioFinal').value,
      
    };

    if (this.id !== null) {
      this.productService.updateProducto(this.id, producto).subscribe(data => {
        this.router.navigate(['/']);
      });
    } else {
      this.productService.createProducto(producto).subscribe(data => {
        this.router.navigate(['/']);
      });
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Producto';
      this.productService.getProductoById(this.id).subscribe(data => {
        this.productoForm.setValue({
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
