import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ConfigService } from './config.service';


@Injectable()
export class EquipoService {

  url: string;

  constructor(
    private config: ConfigService,
    private http: Http,
  ) {
    this.url = this.config.api_url + "equipos/";
  }

  getEquipos(): Observable<any[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getEquipoConJugadores(id_equipo) {
    return this.http.get(this.url + "get_equipo_con_jugadores/" + id_equipo)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getEquiposLiga(id_liga): Observable<any[]> {
    return this.http.get(this.url + "get_equipos_liga/" + id_liga)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getJugadores(id_equipo) {
    return this.http.get(this.url + "get_jugadores/" + id_equipo)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createEquipo(equipo) {
    return this.http.post(this.url + "create_equipo", { equipo: equipo })
      .map(this.extractData)
      .catch(this.handleError);
  }



  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    //console.log("handleError", error);
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
