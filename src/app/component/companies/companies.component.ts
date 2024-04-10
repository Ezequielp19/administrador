import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { compania } from 'src/app/models/compania';
import { CompaniaService } from 'src/app/services/compania.service'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniasComponent implements OnInit {
  companiaForm: FormGroup;
  
  titulo = 'Crear Compañia';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private _companiaService: CompaniaService,
              private aRouter: ActivatedRoute){
    this.companiaForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.esEditar();
  }
  goBack() {
    window.history.back();
  }

  agregarCompania(){
    
    const COMPANIA: compania = {
      nombre: this.companiaForm.get('nombre')?.value,
      email: this.companiaForm.get('email')?.value,
      telefono: this.companiaForm.get('telefono')?.value,
      direccion: this.companiaForm.get('direccion')?.value
    }

    if(this.id!==null){
      // editamos producto
      this._companiaService.editarCompania(this.id, COMPANIA).subscribe(data=>{
        this.router.navigate(['/']);    
      })
    } else {
      // agregamos producto
      console.log(COMPANIA);
      this._companiaService.guardarCompania(COMPANIA).subscribe(data =>{
      this.router.navigate(['/']);
    })
    }
  }
  
  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Compañia';
      this._companiaService.obtenerCompania(this.id).subscribe(data =>{
        this.companiaForm.setValue({
          nombre: data.nombre,
          email: data.email,
          telefono: data.telefono,
          direccio: data.direccion
        })
      })
    }
  }

}