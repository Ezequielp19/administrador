import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { sorteo } from 'src/app/models/sorteo';
import { SorteoService } from 'src/app/services/sorteo.service'

@Component({
  selector: 'app-loteryes',
  templateUrl: './loteryes.component.html',
  styleUrls: ['./loteryes.component.scss'],
})
export class SorteosComponent implements OnInit {
  loteryForm: FormGroup;
  
  titulo = 'Crear Sorteo';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private _sorteoService: SorteoService,
              private aRouter: ActivatedRoute){
    this.loteryForm = this.fb.group({
      foto: ['', Validators.required],
      titulo: ['', Validators.required],
      fecha: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.esEditar();
  }
  goBack() {
    window.history.back();
  }

  agregarSorteo(){
    
    const LOTERY: sorteo = {
      foto: this.loteryForm.get('foto')?.value,
      titulo: this.loteryForm.get('titulo')?.value,
      nombre: this.loteryForm.get('nombre')?.value,
      fecha:this.loteryForm.get('fecha')?.value,
      descripcion: this.loteryForm.get('descripcion')?.value,
    }

    if(this.id!==null){
      // editamos producto
      this._sorteoService.editarSorteo(this.id,LOTERY).subscribe(data=>{
        this.router.navigate(['/']);    
      })
    } else {
      // agregamos producto
      console.log(LOTERY);
      this._sorteoService.guardarSorteo(LOTERY).subscribe(data =>{
      this.router.navigate(['/']);
    })
    }
  }
  
  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Sorteo';
      this._sorteoService.obtenerSorteo(this.id).subscribe(data =>{
        this.loteryForm.setValue({
          foto: data.foto,
          titulo: data.titulo,
          nombre: data.nombre,
          fecha: data.fecha,
          descripcion: data.descripcion
        })
      })
    }
  }

}
