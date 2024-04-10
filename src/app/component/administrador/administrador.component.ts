// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AdministradorService } from 'src/app/services/administrador.service'; // Importa el servicio
// import { administrador } from 'src/app/models/administrador';
// @Component({
//   selector: 'app-administrador',
//   templateUrl: './administrador.component.html',
//   styleUrls: ['./administrador.component.scss'],
// })
// export class AdministradorComponent implements OnInit {

//   listAdmin: any;

//   constructor(private router: Router, private _administradorService: AdministradorService) {}

//   ngOnInit() {
//     this.obtenerAdministrador();
//   }

  
//   obtenerAdministrador() {
//     this._administradorService.getAdministrador().subscribe(data => {
//       console.log(data);
//       this.listAdmin = data;
//     })
//   }

//   eliminarAdministrador(id: any) {
//     this._administradorService.eliminarAdministrador(id).subscribe(data => {
//     this.obtenerAdministrador();
//     })
//   }
  

//   goBack() {
//     window.history.back();
//   }
 
//   navigateToPage1() {
//     this.router.navigate(['/home']); //
//   }

//   navigateToPage4() {
//     this.router.navigate(['/employee']); //
//   }

//   navigateToPage2() {
//     this.router.navigate(['/product']); //
//   }

//   navigateToPage5() {
//     this.router.navigate(['/company']); //
//   }

//   navigateToPage6(){
//     this.router.navigate(['/administradors'])
//   }

// }
