import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { comentarios } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/services/comentario.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comentForm: FormGroup;
  
  titulo = 'Crear Comentario';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private _comentarioService: ComentarioService,
              private aRouter: ActivatedRoute){
    this.comentForm = this.fb.group({
      comentario: ['', Validators.required],
      puntuacion: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.esEditar();
  }
  goBack() {
    window.history.back();
  }

  agregarComentario(){
    
    const COMENT: comentarios = {
      comentario: this.comentForm.get('comentario')?.value,
      puntuacion: this.comentForm.get('puntuacion')?.value,
      
    }

    if(this.id!==null){
      // editamos producto
      this._comentarioService.editarComentario(this.id, COMENT).subscribe(data=>{
        this.router.navigate(['/']);    
      })
    } else {
      // agregamos producto
      console.log(COMENT);
      this._comentarioService.guardarComentario(COMENT).subscribe(data =>{
      this.router.navigate(['/']);
    })
    }
  }
  
  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Comentario';
      this._comentarioService.obtenerComentario(this.id).subscribe(data =>{
        this.comentForm.setValue({
          comentario: data.comentario,
          puntuacion: data.puntuacion,
        })
      })
    }
  }

}