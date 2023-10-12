import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  navigateToPage1() {
    this.router.navigate(['/employee']); // 
  }

  navigateToPage2() {
    this.router.navigate(['/category']); //
  }

  navigateToPage3() {
    this.router.navigate(['/product']); //
  }

  navigateToPage4() {
    this.router.navigate(['/company']); //
  }

  navigateToPage5() {
    this.router.navigate(['/administrador']); //
  }

  
  navigateToPage6() {
    this.router.navigate(['/login']); //
  }

  
}
