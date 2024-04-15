
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoProducto } from '../models/pNuevo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NuevoProductoService {
 private apiUrl = `${environment.apiUrl}/nuevoProducto`;

  constructor(private http: HttpClient) { }

  // Método para crear un nuevo producto
  crearProductoNuevo(nuevoProducto: NuevoProducto): Observable<any> {
    return this.http.post<any>(this.apiUrl, nuevoProducto);
  }

  updateProductoNuevo(id: string, nuevoProducto: NuevoProducto): Observable<NuevoProducto> {
    return this.http.put<NuevoProducto>(`${this.apiUrl}/${id}`, nuevoProducto);
  }

  deleteProductoNuevo(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getProductoNuevoById(id: string): Observable<NuevoProducto> {
    return this.http.get<NuevoProducto>(`${this.apiUrl}/${id}`);
  }


  getAllProductoNuevo(): Observable<NuevoProducto[]> {
    return this.http.get<NuevoProducto[]>(this.apiUrl);
  }
  
}