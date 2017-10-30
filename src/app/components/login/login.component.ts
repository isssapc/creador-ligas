import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ROLES } from "../../constantes/roles";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: any = { email: "", password: "" };
  alert: string;
  loading: boolean = false;
  
  Rol= ROLES;

  constructor(
    private auth: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(usuario) {
    
        this.loading = true;
        this.auth.login(usuario)
          .subscribe(res => {
            this.loading = false;
            if (res.error) {
              this.alert = res.error;
            } else {
              console.log("login", res);
              localStorage.setItem('token', res.token);
              localStorage.setItem('usuario', JSON.stringify(res.usuario));
              this.usuario = { email: "", password: "" };
              this.alert = "";
    
              if (Number(res.usuario.rol) === this.Rol.Administrador) {
                if (this.auth.redirectUrl) {
                  let url = this.auth.redirectUrl;
                  this.auth.redirectUrl = null;
                  this.router.navigate([url]);
                } else {
                  this.router.navigate(['/temporadas']);
                }
    
              } else if (Number(res.usuario.rol) === this.Rol.Arbitro) {
                if (this.auth.redirectUrl) {
                  let url = this.auth.redirectUrl;
                  this.auth.redirectUrl = null;
                  this.router.navigate([url]);
                } else {
                  this.router.navigate(['/temporadas']);
                }
              } else if (Number(res.usuario.rol) === this.Rol.Capitan) {
                if (this.auth.redirectUrl) {
                  let url = this.auth.redirectUrl;
                  this.auth.redirectUrl = null;
                  this.router.navigate([url]);
                } else {
                  this.router.navigate(['/temporadas']);
                }
              } else {
                //rol no valido
              }
    
            }
          });
      }

}
