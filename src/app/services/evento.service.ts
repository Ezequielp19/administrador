import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { event } from 'src/app/models/evento'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiUrl = `${environment.apiUrl}/evento`;

  constructor(private http: HttpClient) { }

  getEvento(): Observable<event> {
    return this.http.get<event>(this.apiUrl);
  }

  eliminarEvento(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  guardarEvento(evento: event): Observable<event> {
    return this.http.post<event>(this.apiUrl, evento)
      .pipe(
        catchError((error: any) => {
          console.error('Error al guardar el evento:', error);
          return throwError(error);
        })
      );
  }
  

  obtenerEvento(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  editarEvento(id: string, evento: event): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, evento);
  }
}