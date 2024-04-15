import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';
import { sorteo } from 'src/app/models/sorteo'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SorteoService {
  private apiUrl = `${environment.apiUrl}/sorteo`;

  constructor(private http: HttpClient) { }

  getSorteo(): Observable<sorteo> {
    return this.http.get<sorteo>(this.apiUrl);
  }

  eliminarSorteo(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  guardarSorteo(sorteo: sorteo): Observable<any> {
    return this.http.post(this.apiUrl,sorteo)
      .pipe(
        catchError((error: any) => {
          console.error('Error al guardar el sorteo:', error);
          return throwError(error);
        })
      );
  }
  

  obtenerSorteo(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  editarSorteo(id: string, sorteo: sorteo): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}` , sorteo);
  }
}