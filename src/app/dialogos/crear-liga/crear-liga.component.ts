import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LigaService } from '../../services/liga.service';

@Component({
  selector: 'app-crear-liga',
  templateUrl: './crear-liga.component.html',
  styleUrls: ['./crear-liga.component.scss']
})
export class CrearLigaComponent implements OnInit {

  @ViewChild('formCreate') formCreate: NgForm;
  liga: any = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CrearLigaComponent>,
    private ligaSrv: LigaService
  ) { }

  ngOnInit() {
  }

  createLiga() {

    this.liga.id_temporada= this.data.temporada;

    this.ligaSrv.createLiga(this.liga)
      .subscribe(
      liga => {
        console.log("response", liga);

        this.data.ligas.push(liga);
        this.formCreate.reset();
        
        //podría devolver el liga y que sea el componente padre
        // quien lo añada a la lista de liga
        this.dialogRef.close(liga);

      },
      (error: any) => {
        this.dialogRef.close({ error: "ERROR. Verifique sus datos o compruebe su conexión" });
      });
  }

}
