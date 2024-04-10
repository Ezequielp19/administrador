import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service'; // Importa el servicio
import { empleado } from 'src/app/models/empleado';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmpleadoComponent implements OnInit {

  listEmpleados: any;

  constructor(private router: Router, private _empleadoService: EmpleadoService) {}

  ngOnInit(): void{
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this._empleadoService.getEmpleado().subscribe(data => {
      console.log(data);
      this.listEmpleados = data;
    })
  }

  eliminarProducto(id: any) {
    this._empleadoService.eliminarEmpleado(id).subscribe(data => {
    this.obtenerEmpleados();
    })
  }
  

  goBack() {
    window.history.back();
  }

  navigateToPage1() {
    this.router.navigate(['/home']); //
  }

  navigateToPage4() {
    this.router.navigate(['/administrador']); //
  }

  navigateToPage2() {
    this.router.navigate(['/product']); //
  }
  navigateToPage5() {
    this.router.navigate(['/company']); //
  }
  navigateToPage6() {
    this.router.navigate(['/employees']); //
  }
}
