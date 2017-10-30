import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authSrv: AuthService, private router: Router)
  { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      let url: string = state.url;
      return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    
        if (this.authSrv.loggedIn()) {
    
          console.log("is logged in, guard passed!!");
          return true;
        }
    
        console.log("intentando navegar a: ", url);
        console.log("is not logged in, redirect to login route");
        //store the url for redirecting
        // despues al iniciar sesion redirigir
        this.authSrv.redirectUrl = url;
    
        this.router.navigate(["/login"]);
        return false;
    
      }
}
