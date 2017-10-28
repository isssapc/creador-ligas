import { Component, OnInit } from '@angular/core';
import { TemporadaService } from '../../services/temporada.service';
import { LigaService } from '../../services/liga.service';
import { EquipoService } from '../../services/equipo.service';
import { JornadaService } from '../../services/jornada.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.scss']
})
export class LigasComponent implements OnInit {


  temporadas: any[] = [];
  ligas: any[] = [];

  temporada_selected: string = "";
  jornada_selected: string;
  equipo_selected: string;
  liga_selected: string;

  liga: any;

  constructor(
    private temporadaSrv: TemporadaService,
    private ligaSrv: LigaService,
    private equipoSrv: EquipoService,
    private jornadaSrv: JornadaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.temporadaSrv.getTemporadas()
      .subscribe(temporadas => this.temporadas = temporadas);

    this.route.paramMap
      .switchMap((params: ParamMap) => {

        if (params.has("temporada")) {
          this.temporada_selected = params.get("temporada");
          return this.ligaSrv.getLigasTemporada(this.temporada_selected);
        } else {
          return Observable.of([]);
        }

      }).subscribe(ligas => {
        this.ligas = ligas;

      });



    /*   this.route.paramMap
        .switchMap((params: ParamMap) => {
  
          if (params.has("temporada")) {
            this.temporada_selected = params.get("temporada");
            return this.ligaSrv.getLigasTemporada(this.temporada_selected);
          }
  
        }).subscribe(ligas => {
          this.ligas = ligas;  
  
        }); */








    /*     this.ligaSrv.getLigas()
          .subscribe(ligas => this.ligas = ligas);
    
        this.jornadaSrv.getJornadas()
          .subscribe(jornadas => this.jornadas = jornadas);
    
        this.equipoSrv.getEquipos()
          .subscribe(equipos => this.equipos = equipos); */
  }

  /*   addTemporada(nombre) {
      let temporada = { nombre: nombre };
      this.temporadaSrv.createTemporada(temporada)
        .subscribe(temporada => {
          this.temporadas.unshift(temporada);
        });
    } */






  /*   addLiga(nombre) {
      let liga = { nombre: nombre, id_temporada: this.temporada_selected };
  
      this.ligaSrv.createLiga(liga)
        .subscribe(liga => {
          this.ligas.unshift(liga);
        });
    } */

  /*  addEquipo(nombre) {
 
     let equipo = { nombre: nombre, id_liga: this.liga_selected };
 
     this.equipoSrv.createEquipo(equipo)
       .subscribe(equipo => {
         this.equipos.unshift(equipo);
       });
   } */

  /*   addJornada(nombre) {
  
      let jornada = { nombre: nombre, id_liga: this.liga_selected }
      this.jornadaSrv.createJornada(jornada)
        .subscribe(jornada => {
          this.jornadas.unshift(jornada);
        });
    } */

  getLigasTemporada(id_temporada) {
    /*     this.ligaSrv.getLigasTemporada(id_temporada)
          .subscribe(ligas => {
            this.ligas = ligas;
    
          }); */

    this.router.navigate([".", { temporada: id_temporada }]);
  }

  getLiga(id_liga) {
    /*     this.ligaSrv.getLiga(id_liga)
          .subscribe(response => {
            this.liga = response.liga;
            this.equipos = response.equipos;
            this.jornadas = response.jornadas;
          }); */

    /*  
     this.router.navigate([".", { temporada: this.temporada_selected, liga:id_liga }]); */

    this.router.navigate([".", { liga: id_liga }]);
  }


}
