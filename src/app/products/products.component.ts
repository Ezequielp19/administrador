import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productData: any = {}; // Inicializa productData como un objeto vacío

  constructor(private productService: ProductService) {}

  onSubmit() {
    // Lógica para agregar un producto
    this.productService.addProduct(this.productData).subscribe((response) => {
      console.log('Producto agregado con éxito', response);
      // Puedes realizar alguna acción adicional después de agregar el producto
    });
  }

  goBack() {
    window.history.back();
  }

  ngOnInit() {}
}
