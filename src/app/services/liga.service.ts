import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ConfigService } from './config.service';


@Injectable()
export class LigaService {
  url: string;

  constructor(
    private config: ConfigService,
    private http: Http,
  ) {
    this.url = this.config.api_url + "ligas/";
  }

  getLigas(): Observable<any[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getLigasTemporada(id_temporada): Observable<any[]> {
    return this.http.get(this.url + "get_ligas_temporada/" + id_temporada)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getLiga(id_liga) {
    return this.http.get(this.url + "get_liga/" + id_liga)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createLiga(liga) {
    return this.http.post(this.url + "create_liga", { liga: liga })
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
