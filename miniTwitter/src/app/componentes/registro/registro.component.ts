import { Component, OnInit } from '@angular/core';
import {SignUpDto} from '../../dto/signUp.dto';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuarioRegistro: SignUpDto;

  constructor(private authService: AuthService,private router: Router) {
    this.usuarioRegistro = new SignUpDto('','','','UDEMYANDROID');
  }

  ngOnInit() {
    this.usuarioRegistro = new SignUpDto('','','','UDEMYANDROID');
  }

  doRegistry() {
    this.authService.registro(this.usuarioRegistro).subscribe(respuesta => {
        //alert('API TOKEN ' + respuesta.token);
        this.router.navigate(["/"]);
    });
  }


}
