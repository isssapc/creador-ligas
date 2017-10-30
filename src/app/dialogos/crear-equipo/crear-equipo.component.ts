import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.scss']
})
export class CrearEquipoComponent implements OnInit {

  @ViewChild('formCreate') formCreate: NgForm;
  equipo: any = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CrearEquipoComponent>,
    private equipoSrv: EquipoService
  ) { }

  ngOnInit() {
  }

  createEquipo() {
    this.equipo.id_liga = this.data.liga;

    this.equipoSrv.createEquipo(this.equipo)
      .subscribe(
      equipo => {
        console.log("response", equipo);

        this.data.equipos.push(equipo);
        this.formCreate.reset();

        //podría devolver el equipo y que sea el componente padre
        // quien lo añada a la lista de equipo
        this.dialogRef.close(equipo);

      },
      (error: any) => {
        this.dialogRef.close({ error: "ERROR. Verifique sus datos o compruebe su conexión" });
      });
  }

}
