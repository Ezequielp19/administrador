import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
categoriaForm: FormGroup;
  titulo = 'Crear Categoria';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private categoriaService: CategoriaService,
              private activatedRoute: ActivatedRoute) {
    this.categoriaForm = this.fb.group({
      nombre: ['', Validators.required],
      imagen: ['', Validators.required],    
    });
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  goBack() {
    window.history.back();
  }

  agregarCategoria() {
    const categoria: Categoria = {
      nombre: this.categoriaForm.get('nombre').value,
      imagen: this.categoriaForm.get('imagen').value,
     
    };

    if (this.id !== null) {
      this.categoriaService.updateCategoria(this.id, categoria).subscribe(data => {
        this.router.navigate(['/']);
      });
    } else {
      this.categoriaService.createCategoria(categoria).subscribe(data => {
        this.router.navigate(['/']);
      });
    }
  }

  enviar() {
    this.router.navigate(['/categoria']); //
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Categoria';
      this.categoriaService.getCategoriaById(this.id).subscribe(data => {
        this.categoriaForm.setValue({
          nombre: data.nombre,
          imagen: data.imagen,
        });
      });
    }
  }

}
