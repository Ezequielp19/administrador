import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss'],
})
export class AdministradorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  navigateToPage1() {
    this.router.navigate(['/home']); //
  }

  navigateToPage3() {
    this.router.navigate(['/category']); //
  }

  navigateToPage4() {
    this.router.navigate(['/employee']); //
  }

  navigateToPage2() {
    this.router.navigate(['/product']); //
  }

}
