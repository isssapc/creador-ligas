import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  //jugadores: any[];

  equipo: any = {};

  constructor(
    private equipoSrv: EquipoService,
    private jugadorSrv: JugadorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.equipoSrv.getEquipoConJugadores(params.get("id")))
      .subscribe(equipo => {
        this.equipo = equipo;
      });

  }

  addJugador(nombre) {
    let id_equipo = this.route.snapshot.paramMap.get("id");

    let jugador = { nombre: nombre, id_equipo: id_equipo };

    this.jugadorSrv.createJugador(jugador)
      .subscribe(jugador => {
        this.equipo.jugadores.push(jugador);
      });


  }

}
