import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service'; // Importa el servicio
import { comentarios } from 'src/app/models/comentario';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class ComentarioComponent implements OnInit {

  listComentario: any;

  constructor(private router: Router, private _comentarioService: ComentarioService) {}

  ngOnInit() {
    this.obtenerComentario();
  }

  
  obtenerComentario() {
    this._comentarioService.getComentario().subscribe(data => {
      console.log(data);
      this.listComentario = data;
    })
  }

  eliminarComentario(id: any) {
    this._comentarioService.eliminarComentario(id).subscribe(data => {
    this.obtenerComentario();
    })
  }
  

  goBack() {
    window.history.back();
  }
 
  navigateToPage1() {
    this.router.navigate(['/home']); //
  }

  navigateToPage4() {
    this.router.navigate(['/employee']); //
  }

  navigateToPage2() {
    this.router.navigate(['/product']); //
  }

  navigateToPage5() {
    this.router.navigate(['/company']); //
  }

  navigateToPage6(){
    this.router.navigate(['/administradors'])
  }

}
