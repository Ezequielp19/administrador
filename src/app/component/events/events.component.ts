import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EventoService } from 'src/app/services/evento.service'
import { event } from 'src/app/models/evento'
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {

  eventForm: FormGroup;

  goBack() {
    window.history.back();
  }

  titulo = 'Crear Evento';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private _eventoService: EventoService,
              private aRouter: ActivatedRoute){
    this.eventForm = this.fb.group({
      foto: ['', Validators.required],
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.esEditar();
  }

  agregarEvento(){
    
    const EVENT: event= {
      foto: this.eventForm.get('foto')?.value,
      nombre: this.eventForm.get('nombre')?.value,
      fecha: this.eventForm.get('fecha')?.value,
      descripcion: this.eventForm.get('descripcion')?.value,
    }

    if(this.id!==null){
      // editamos producto
      this._eventoService.editarEvento(this.id, EVENT).subscribe(data=>{
        this.router.navigate(['/']);    
      })
    } else {
      // agregamos producto
      console.log(EVENT);
      this._eventoService.guardarEvento(EVENT).subscribe(data =>{
      this.router.navigate(['/']);
    })
    }
  }
  
  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Evento';
      this._eventoService.obtenerEvento(this.id).subscribe(data =>{
        this.eventForm.setValue({
          foto: data.foto,
          nombre: data.nombre,
          fecha: data.fecha,
          descripcion: data.descripcion,
        })
      })
    }
  }

}
