import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { tokenNotExpired } from "angular2-jwt/angular2-jwt";
import { ConfigService } from './config.service';


@Injectable()
export class AuthService {
  url:string;

  constructor(
    private config: ConfigService,
    private http: Http) {
    this.url = this.config.api_url + "auth/";
  }

  login(usuario) {
    return this.http.post(this.url + 'login', { usuario: usuario })
      .map(this.extractData)
      .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    console.log("loggedout");
  }

  loggedIn() {
    return tokenNotExpired();
  }

  getUsuario() {
    let strUsuario = localStorage.getItem("usuario");

    if (strUsuario) {
      let usuario = JSON.parse(strUsuario);
      return usuario;
    } else {
      return null;
    }
  }

  getRolUsuario() {
    let usuario = this.getUsuario();
    if (usuario) {
      return Number(usuario.id_rol);
    } else {
      return -1;
    }

  }

  /*   getUsername() {
      let usuario = this.getUsuario();
      return usuario.email.split('@')[0];
  
    } */

  hasRole(roles: any[]) {
    var visible = false;
    var mi_rol = this.getRolUsuario();

    var i = roles.indexOf(mi_rol);

    if (i >= 0) {
      visible = true;
    }
    /*     console.log("------------------------------");
        console.log("roles", roles);
        console.log("mi rol ", mi_rol);
        console.log("index ", i);
        console.log("visible ", visible);
        console.log("------------------------------"); */
    return visible;

  }


  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    //console.log("handleError", error);
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
