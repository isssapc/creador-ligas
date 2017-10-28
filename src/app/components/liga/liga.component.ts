import { Component, OnInit } from '@angular/core';
import { LigaService } from '../../services/liga.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.scss']
})
export class LigaComponent implements OnInit {

  jornadas: any[] = [];
  equipos: any[] = [];
  liga: any = {};

  constructor(
    private ligaSrv: LigaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.ligaSrv.getLiga(params.get("id")))
      .subscribe(response => {
        this.liga = response.liga;
        this.equipos = response.equipos;
        this.jornadas = response.jornadas;
      });

  }

}
