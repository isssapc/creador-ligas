import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JornadaService } from '../../services/jornada.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PartidoService } from '../../services/partido.service';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.scss']
})
export class JornadaComponent implements OnInit {
  jornada: any = {};
  id_jornada: string;
  id_liga: string;
 
  partidos: any[];
 
  equipos: any[];

  constructor(
    private jornadaSrv: JornadaService,
    private partidoSrv: PartidoService,
    private equipoSrv: EquipoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    /*        this.id_jornada = params.get("id_jornada");
       this.id_liga = params.get("id_liga");
       console.log("id_liga", this.id_liga);
       console.log("id_jornada", this.id_jornada); */

    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.partidoSrv.getPartidosJornada(params.get("id")))
      .subscribe(partidos => {
        this.partidos = partidos;
      });






/*     this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.equipoSrv.getEquiposLiga(params.get("id_liga")))
      .subscribe(equipos => {
        this.equipos = equipos;
      }); */


    //this.partidos$.subscribe(partidos => this.partidos = partidos);


  }

  addPartido(local, visitante) {
    let partido = { id_jornada: this.id_jornada, id_equipo_local: local, id_equipo_visitante: visitante };

    this.partidoSrv.createPartido(partido)
      .subscribe(partido => {
        this.partidos.push(partido);
      });

  }

}
