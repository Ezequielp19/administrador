import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput', { static: false }) emailInput: ElementRef;
  @ViewChild('passwordInput', { static: false }) passwordInput: ElementRef;


  constructor(private router: Router,
    private alertController: AlertController 
    ){}
  ngOnInit(){
  }

  async navigateToPage1() {
    const email = this.emailInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;

    if (email === 'admin@admin.com' && password === '12345') {
      this.router.navigate(['/home']);
    } else { 
      const alert = await this.alertController.create({
        header: 'Error de autenticación',
        message: 'Las credenciales son incorrectas. Por favor, inténtalo de nuevo.',
        buttons: ['OK']
      });

      await alert.present();

  }
   }
}
