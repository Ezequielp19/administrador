// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import { administrador } from 'src/app/models/administrador';
// import { AdministradorService } from 'src/app/services/administrador.service'

// @Component({
//   selector: 'app-administradors',
//   templateUrl: './administradors.component.html',
//   styleUrls: ['./administradors.component.scss'],
// })
// export class AdministradorsComponent implements OnInit {
//   adminForm: FormGroup;
  
//   titulo = 'Crear Administrador';
//   id: string | null;
//   constructor(private fb: FormBuilder,
//               private router: Router,
//               private _administradorService: AdministradorService,
//               private aRouter: ActivatedRoute){
//     this.adminForm = this.fb.group({
//       nombre: ['', Validators.required],
//       apellido: ['', Validators.required],
//       email: ['', Validators.required],
//       usuario: ['', Validators.required],
//       contrasenia: ['', Validators.required]
//     })
//     this.id = this.aRouter.snapshot.paramMap.get('id');
//   }
//   ngOnInit(): void {
//     this.esEditar();
//   }
//   goBack() {
//     window.history.back();
//   }

//   agregarAdministrador(){
    
//     const ADMIN: administrador = {
//       nombre: this.adminForm.get('nombre')?.value,
//       apellido: this.adminForm.get('apellido')?.value,
//       email: this.adminForm.get('email')?.value,
//       usuario: this.adminForm.get('usuario')?.value,
//       contrasenia: this.adminForm.get('contrasenia')?.value
//     }

//     if(this.id!==null){
//       // editamos producto
//       this._administradorService.editarAdministrador(this.id, ADMIN).subscribe(data=>{
//         this.router.navigate(['/']);    
//       })
//     } else {
//       // agregamos producto
//       console.log(ADMIN);
//       this._administradorService.guardarAdministrador(ADMIN).subscribe(data =>{
//       this.router.navigate(['/']);
//     })
//     }
//   }
  
//   esEditar(){
//     if(this.id !== null){
//       this.titulo = 'Editar Administrador';
//       this._administradorService.obtenerAdministrador(this.id).subscribe(data =>{
//         this.adminForm.setValue({
//           nombre: data.nombre,
//           apellido: data.apellido,
//           email: data.email,
//           usuario: data.usuario,
//           contrasenia: data.contrasenia
//         })
//       })
//     }
//   }

// }