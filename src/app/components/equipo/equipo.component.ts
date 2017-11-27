import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { JugadorService } from '../../services/jugador.service';
import { CrearJugadorComponent } from '../../dialogos/crear-jugador/crear-jugador.component';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  //jugadores: any[];

  equipo: any = {};
  jugador_selected: any = {};

  constructor(
    private equipoSrv: EquipoService,
    private jugadorSrv: JugadorService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }


  ngOnInit() {

    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.equipoSrv.getEquipoConJugadores(params.get("id")))
      .subscribe(equipo => {
        this.equipo = equipo;
      });

  }

  createJugador() {


    let dialogRef = this.dialog.open(CrearJugadorComponent, {
      data: {
        id_equipo: this.equipo.id_equipo,
        jugadores: this.equipo.jugadores

      },
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        if (result.error) {
          this.snackBar.open(result.error, "Cerrar", {
            duration: 2000
          });
        } else {
          this.snackBar.open("Jugador Creado", "Cerrar", {
            duration: 2000
          });
        }

      }


    });









  }

}
