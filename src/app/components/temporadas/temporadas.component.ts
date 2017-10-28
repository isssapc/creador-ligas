import { Component, OnInit } from '@angular/core';
import { TemporadaService } from '../../services/temporada.service';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.scss']
})
export class TemporadasComponent implements OnInit {

  temporadas:any[];

  constructor(

    private temporadaSrv: TemporadaService,
    /*     private router: Router,
        private route: ActivatedRoute, */
  ) { }

  ngOnInit() {

    this.temporadaSrv.getTemporadas()
      .subscribe(temporadas => this.temporadas = temporadas);
  }

}
