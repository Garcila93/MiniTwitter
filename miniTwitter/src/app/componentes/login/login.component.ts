import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../dto/login.dto';
import { AuthService } from '../../servicios/auth.service';
import { AppRoutingModule } from '../../app-routing.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: LoginDto;


  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new LoginDto('', '');
  }

  ngOnInit() {
  }

  doLogin() {

    if (this.usuario.email == '' || this.usuario.password == '') {
      alert('Rellena los campos!!!');
    }
    else {

      this.authService.login(this.usuario).subscribe(respuesta => {

        console.log(status);
        if (respuesta.token) {
          console.log(respuesta.token)
          localStorage.setItem('token', respuesta.token);
          this.router.navigate(['tweets']);
        } else {

          alert('Combinacion erronea!')
        }
      });
    }
  }

}
