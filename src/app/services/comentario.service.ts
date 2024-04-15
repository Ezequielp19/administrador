import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
import { comentarios } from '../models/comentario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = `${environment.apiUrl}/comentario`;

  constructor(private http: HttpClient) { }

  getComentario(): Observable<comentarios> {
    return this.http.get<comentarios>(this.apiUrl);
  }

  eliminarComentario(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  guardarComentario(comentario: comentarios): Observable<any> {
    return this.http.post(this.apiUrl, comentario)
      .pipe(
        catchError((error: any) => {
          console.error('Error al guardar el comentario:', error);
          return throwError(error);
        })
      );
  }
  

  obtenerComentario(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  editarComentario(id: string, comentario: comentarios): Observable<any>{
    return this.http.put((`${this.apiUrl}/${id}`), comentario);
  }
}