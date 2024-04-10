import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
import { AlertController } from '@ionic/angular';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput', { static: false }) emailInput: ElementRef;
  @ViewChild('passwordInput', { static: false }) passwordInput: ElementRef;
  emailInputFocused: boolean = false;
  passwordInputFocused: boolean = false;
  listAdmin: any;

  constructor(private router: Router,
    private alertController: AlertController,
    private _administradorService: AdministradorService 
    ){}
  ngOnInit(){
    this.obtenerAdministrador();
  }

  async navigateToPage1() {
    const usuario = this.emailInput.nativeElement.value;
    const contrasenia = this.passwordInput.nativeElement.value;
    const adminMatch = this.listAdmin.find(admin => admin.usuario === usuario && admin.contrasenia === contrasenia);

    if (adminMatch) {
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
   obtenerAdministrador() {
    this._administradorService.getAdministrador().subscribe(data => {
      console.log(data);
      this.listAdmin = data;
    })
  }

}
