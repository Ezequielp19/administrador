import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  navCtrl: any;

  constructor(private router: Router) { }

  ngOnInit() {}

  email: string = '';
  password: string = '';


  login() {
    
    if (this.email === 'admin@admin.com' && this.password === 'admin98@2') {
      
      this.router.navigate(['/home']);
    } else {
      
      console.log('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  }

  navigateToPage1() {
    this.router.navigate(['/home']); //
  }

}
