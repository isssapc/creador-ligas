import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  username:string;
  isCollapsed=true;

  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    let usuario = this.auth.getUsuario();
    this.username = usuario.nombre.split(" ")[0];
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
