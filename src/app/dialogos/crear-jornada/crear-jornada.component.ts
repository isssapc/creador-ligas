import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { JornadaService } from '../../services/jornada.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-jornada',
  templateUrl: './crear-jornada.component.html',
  styleUrls: ['./crear-jornada.component.scss']
})
export class CrearJornadaComponent implements OnInit {

  @ViewChild('formCreate') formCreate: NgForm;
  jornada: any = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CrearJornadaComponent>,
    private jornadaSrv: JornadaService
  ) { }

  ngOnInit() {
  }

  createJornada() {
    this.jornada.id_liga = this.data.liga;
    this.jornadaSrv.createJornada(this.jornada)
      .subscribe(
      jornada => {
        console.log("response", jornada);

        this.data.jornadas.push(jornada);
        this.formCreate.reset();

        //podría devolver el jornada y que sea el componente padre
        // quien lo añada a la lista de jornada
        this.dialogRef.close(jornada);

      },
      (error: any) => {
        this.dialogRef.close({ error: "ERROR. Verifique sus datos o compruebe su conexión" });
      });
  }

}
