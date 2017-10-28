import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  //cambiar MANUALMENTE
  prod: boolean = false;


  //se usa en todos los servicios
  api_url: string = "/api/index.php/";
  //se usa en el componente agregar-imagen-dialogo
  upload_image_url: string = "/api/index.php/propiedades/upload_imagen";

  constructor() {

    if (this.prod) {
      //produccion ->subdominio

    } else {
      //desarrollo -> localhost
      let localhost = "http://localhost:8080/ligas";
      //let localhost = "http://192.168.0.108:8080/inmobiliaria";      
      this.api_url = localhost + this.api_url;
      this.upload_image_url = localhost + this.upload_image_url;


    }

  }

}
