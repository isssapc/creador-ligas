import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ConfigService } from './config.service';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class JornadaService {

  url: string;

  constructor(
    private config: ConfigService,
    private http: Http,
    private authHttp: AuthHttp
  ) {
    this.url = this.config.api_url + "jornadas/";
  }

  getJornadas(): Observable<any[]> {
    return this.authHttp.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getJornadasLiga(id_liga): Observable<any[]> {
    return this.authHttp.get(this.url + "get_jornadas_liga/" + id_liga)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createJornada(jornada) {
    return this.authHttp.post(this.url + "create_jornada", { jornada: jornada })
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
