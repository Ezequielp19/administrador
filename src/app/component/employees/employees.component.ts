import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmpleadosComponent implements OnInit {

  empleadoForm: FormGroup;

  goBack() {
    window.history.back();
  }

  titulo = 'Crear Empleado';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private _empleadoService: EmpleadoService,
              private aRouter: ActivatedRoute){
    this.empleadoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      salario: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.esEditar();
  }

  agregarEmpleado(){
    
    const EMPLEADO: empleado = {
      nombre: this.empleadoForm.get('nombre')?.value,
      apellido: this.empleadoForm.get('apellido')?.value,
      salario: this.empleadoForm.get('salario')?.value,
      direccion: this.empleadoForm.get('direccion')?.value,
      telefono: this.empleadoForm.get('telefono')?.value
    }

    if(this.id!==null){
      // editamos producto
      this._empleadoService.editarEmpleado(this.id, EMPLEADO).subscribe(data=>{
        this.router.navigate(['/']);    
      })
    } else {
      // agregamos producto
      console.log(EMPLEADO);
      this._empleadoService.guardarEmpleado(EMPLEADO).subscribe(data =>{
      this.router.navigate(['/']);
    })
    }
  }
  
  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Empleado';
      this._empleadoService.obtenerEmpleado(this.id).subscribe(data =>{
        this.empleadoForm.setValue({
          nombre: data.nombre,
          apellido: data.apellido,
          salario: data.salario,
          direccion: data.direccion,
          telefono: data.telefono

        })
      })
    }
  }

}
