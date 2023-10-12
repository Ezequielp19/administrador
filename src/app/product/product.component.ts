import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }
  goBack() {
    window.history.back();
  }
  ngOnInit() {}

  navigateToPage1() {
    this.router.navigate(['/home']); //
  }

  navigateToPage3() {
    this.router.navigate(['/administrador']); //
  }

  navigateToPage4() {
    this.router.navigate(['/employee']); //
  }

  navigateToPage2() {
    this.router.navigate(['/category']); //
  }
  navigateToPage5() {
    this.router.navigate(['/company']); //
  }
}
