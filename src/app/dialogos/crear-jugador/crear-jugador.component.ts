import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-crear-jugador',
  templateUrl: './crear-jugador.component.html',
  styleUrls: ['./crear-jugador.component.scss']
})
export class CrearJugadorComponent implements OnInit {
  jugador: any = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CrearJugadorComponent>,
    private jugadorSrv: JugadorService
  ) { }

  ngOnInit() {
    this.jugador.id_equipo = this.data.id_equipo;
  }

  createJugador() {

    this.jugadorSrv.createJugador(this.jugador)
      .subscribe(jugador => {

        this.data.jugadores.push(jugador);
        this.dialogRef.close(jugador);

      },
      (error: any) => {
        this.dialogRef.close({ error: "ERROR. Verifique sus datos o compruebe su conexión" });
      });

  }

}
