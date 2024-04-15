import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { somos } from 'src/app/models/quienesSomos'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SomosService {
  private apiUrl = `${environment.apiUrl}/quienesSomos`;

  constructor(private http: HttpClient) { }

  getSomos(): Observable<somos> {
    return this.http.get<somos>(this.apiUrl);
  }

  eliminarSomos(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  guardarSomos(somos: somos): Observable<somos> {
    return this.http.post<somos>(this.apiUrl, somos)
      .pipe(
        catchError((error: any) => {
          console.error('Error al guardar el Quienes Somos:', error);
          return throwError(error);
        })
      );
  }
  

  obtenerSomos(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  editarSomos(id: string, somos: somos): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, somos);
  }
}