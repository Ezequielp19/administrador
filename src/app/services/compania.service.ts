import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';


interface compania {
  nombre: string;
  email: string;
  telefono: number;
  direccion: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompaniaService {
  url ='http://localhost:9000/api/compania/';

  constructor(private http: HttpClient) { }

  getCompania(): Observable<compania> {
    return this.http.get<compania>(this.url);
  }

  eliminarCompania(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarCompania(compania: compania): Observable<any> {
    return this.http.post(this.url, compania)
      .pipe(
        catchError((error: any) => {
          console.error('Error al guardar la compania:', error);
          return throwError(error);
        })
      );
  }
  

  obtenerCompania(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCompania(id: string, compania: compania): Observable<any>{
    return this.http.put(this.url + id, compania);
  }
}