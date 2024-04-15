import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SorteoService } from 'src/app/services/sorteo.service'; // Importa el servicio
import { sorteo } from 'src/app/models/sorteo';
@Component({
  selector: 'app-lotery',
  templateUrl: './lotery.component.html',
  styleUrls: ['./lotery.component.scss'],
})
export class SorteoComponent implements OnInit {

  listSorteo: any;

  constructor(private router: Router, private _sorteoService: SorteoService) {}

  ngOnInit() {
    this.obtenerSorteo();
  }

  
  obtenerSorteo() {
    this._sorteoService.getSorteo().subscribe(data => {
      console.log(data);
      this.listSorteo = data;
    })
  }

  eliminarSorteo(id: any) {
    this._sorteoService.eliminarSorteo(id).subscribe(data => {
    this.obtenerSorteo();
    })
  }
  

  goBack() {
    window.history.back();
  }
 
  navigateToPage1() {
    this.router.navigate(['/home']); // 
  }

  navigateToPage3() {
    this.router.navigate(['/product']); //
  }

  navigateToPage4() {
    this.router.navigate(['/productoNuevo']); //
  }
  
  navigateToPage5() {
    this.router.navigate(['/qSomo']); //
  }
  navigateToPage6() {
    this.router.navigate(['/event']); //
  }
  navigateToPage7() {
    this.router.navigate(['/categoria']); //
  }
}
