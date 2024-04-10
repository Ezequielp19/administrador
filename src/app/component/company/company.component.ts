import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompaniaService } from 'src/app/services/compania.service'; // Importa el servicio
import { compania } from 'src/app/models/compania';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {

  listCompanias: any;

  constructor(private router: Router, private _companiaService: CompaniaService) {}

  ngOnInit(): void{
    this.obtenerCompanias();
  }

  obtenerCompanias() {
    this._companiaService.getCompania().subscribe(data => {
      console.log(data);
      this.listCompanias = data;
    })
  }

  eliminarCompania(id: any) {
    this._companiaService.eliminarCompania(id).subscribe(data => {
    this.obtenerCompanias();
    })
  }

goBack() {
  window.history.back();
}

  navigateToPage1() {
    this.router.navigate(['/home']); //
  }

  navigateToPage3() {
    this.router.navigate(['/administrador']); //
  }

  navigateToPage4() {
    this.router.navigate(['/employee']); //
  }

  navigateToPage2() {
    this.router.navigate(['/category']); //
  }
  navigateToPage5() {
    this.router.navigate(['/product']); //
  }

  navigateToPage6() {
    this.router.navigate(['/companies']); //
  }
}
