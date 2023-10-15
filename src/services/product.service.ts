import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  addProduct(productData) {
    return this.http.post(this.apiUrl, productData);
  }
}
