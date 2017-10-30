import { Component, OnInit } from '@angular/core';
import { TemporadaService } from '../../services/temporada.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CrearTemporadaComponent } from '../../dialogos/crear-temporada/crear-temporada.component';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.scss']
})
export class TemporadasComponent implements OnInit {

  temporadas: any[];

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private temporadaSrv: TemporadaService,
    /*     private router: Router,
        private route: ActivatedRoute, */
  ) { }

  ngOnInit() {

    this.temporadaSrv.getTemporadas()
      .subscribe(temporadas => this.temporadas = temporadas);
  }

  crearTemporada() {
    let dialogRef = this.dialog.open(CrearTemporadaComponent, {
      data: {
        temporadas: this.temporadas
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
          this.snackBar.open("Temporada Creada", "Cerrar", {
            duration: 2000
          });
        }

      }


    });

  }

}
