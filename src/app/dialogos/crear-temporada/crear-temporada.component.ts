import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { TemporadaService } from '../../services/temporada.service';

@Component({
  selector: 'app-crear-temporada',
  templateUrl: './crear-temporada.component.html',
  styleUrls: ['./crear-temporada.component.scss']
})
export class CrearTemporadaComponent implements OnInit {

  @ViewChild('formCreate') formCreate: NgForm;
  temporada: any = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CrearTemporadaComponent>,
    private temporadaSrv: TemporadaService

  ) { }

  ngOnInit() {
  }

  createTemporada() {
    this.temporadaSrv.createTemporada(this.temporada)
      .subscribe(
      temporada => {
        console.log("response", temporada);

        this.data.temporadas.push(temporada);
        this.formCreate.reset();

        //podría devolver el temporada y que sea el componente padre
        // quien lo añada a la lista de temporada
        this.dialogRef.close(temporada);

      },
      (error: any) => {
        this.dialogRef.close({ error: "ERROR. Verifique sus datos o compruebe su conexión" });
      });
  }

}
