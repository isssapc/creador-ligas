import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ConfigService } from './config.service';

@Injectable()
export class PartidoService {
  url: string;

  constructor(
    private config: ConfigService,
    private http: Http,
  ) {
    this.url = this.config.api_url + "partidos/";
  }

  getPartidos(): Observable<any[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPartidosJornada(id_jornada) {
    return this.http.get(this.url + "get_partidos_jornada/" + id_jornada)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createPartido(partido) {
    return this.http.post(this.url + "create_partido", { partido: partido })
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
