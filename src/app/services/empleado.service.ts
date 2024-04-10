import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

interface empleado {
    nombre: string;
    apellido: string;
    salario: number;
    direccion: string;
    telefono: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  url ='http://localhost:9000/api/empleado/';

  constructor(private http: HttpClient) { }

  getEmpleado(): Observable<empleado> {
    return this.http.get<empleado>(this.url);
  }

  eliminarEmpleado(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarEmpleado(empleado: empleado): Observable<empleado> {
    return this.http.post<empleado>(this.url, empleado)
      .pipe(
        catchError((error: any) => {
          console.error('Error al guardar el empleado:', error);
          return throwError(error);
        })
      );
  }
  

  obtenerEmpleado(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarEmpleado(id: string, empleado: empleado): Observable<any>{
    return this.http.put(this.url + id, empleado);
  }
}