// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError} from 'rxjs';
// import { catchError} from 'rxjs/operators';


// interface administrador {
//     nombre: string;
//     apellido: string;
//     email: string;
//     usuario: string;
//     contrasenia: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class AdministradorService {
//   url ='http://localhost:9000/api/administrador/';

//   constructor(private http: HttpClient) { }

//   getAdministrador(): Observable<administrador> {
//     return this.http.get<administrador>(this.url);
//   }

//   eliminarAdministrador(id: string): Observable<any> {
//     return this.http.delete(this.url + id);
//   }

//   guardarAdministrador(administrador: administrador): Observable<any> {
//     return this.http.post(this.url, administrador)
//       .pipe(
//         catchError((error: any) => {
//           console.error('Error al guardar el administrador:', error);
//           return throwError(error);
//         })
//       );
//   }
  

//   obtenerAdministrador(id: string): Observable<any> {
//     return this.http.get(this.url + id);
//   }

//   editarAdministrador(id: string, administrador: administrador): Observable<any>{
//     return this.http.put(this.url + id, administrador);
//   }
// }