import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  

  constructor(private router: Router) { }

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
    this.router.navigate(['/product']); //
  }
}
