import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/services/evento.service'; // Importa el servicio

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

  listEvent: any;

  constructor(private router: Router, private _eventoService: EventoService) {}

  ngOnInit(): void{
    this.obtenerEvento();
  }

  obtenerEvento() {
    this._eventoService.getEvento().subscribe(data => {
      console.log(data);
      this.listEvent = data;
    })
  }

  eliminarEvento(id: any) {
    this._eventoService.eliminarEvento(id).subscribe(data => {
    this.obtenerEvento();
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
    this.router.navigate(['/lotery']); //
  }
  navigateToPage7() {
    this.router.navigate(['/categoria']); //
  }
}
