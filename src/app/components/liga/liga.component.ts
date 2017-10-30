import { Component, OnInit } from '@angular/core';
import { LigaService } from '../../services/liga.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CrearJornadaComponent } from '../../dialogos/crear-jornada/crear-jornada.component';
import { CrearEquipoComponent } from '../../dialogos/crear-equipo/crear-equipo.component';

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
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
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


  createJornada() {
    let dialogRef = this.dialog.open(CrearJornadaComponent, {
      data: {
        liga: this.liga.id_liga,
        jornadas: this.jornadas
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
          this.snackBar.open("Jornada Creada", "Cerrar", {
            duration: 2000
          });
        }

      }


    });

  }


  createEquipo() {
    let dialogRef = this.dialog.open(CrearEquipoComponent, {
      data: {
        liga: this.liga.id_liga,
        equipos: this.equipos
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
          this.snackBar.open("Equipo Creado", "Cerrar", {
            duration: 2000
          });
        }

      }


    });

  }

}
