import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {

  constructor(private router: Router) { }
  goBack() {
    window.history.back();
  }
  ngOnInit() {}

  navigateToPage1() {
    this.router.navigate(['/home']); //
  }

  navigateToPage4() {
    this.router.navigate(['/administrador']); //
  }

  navigateToPage3() {
    this.router.navigate(['/category']); //
  }

  navigateToPage2() {
    this.router.navigate(['/product']); //
  }
  navigateToPage5() {
    this.router.navigate(['/company']); //
  }

  






}
