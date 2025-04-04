import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resp } from '../models/resp.model';

@Injectable({
  providedIn: 'root'
})
export class WebappService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset0utf-8',
  });

  private apiURL = 'http://localhost:/reciclar_backend/public'
  constructor(private http: HttpClient) { }

  getMunicipios() {
    return this.http.get(this.apiURL + "/Municipios/todos", { headers: this.headers });
  }

  postInicioWeb(dataBody: any) {
    return this.http.post<Resp>(this.apiURL + "/inicio/web", dataBody, { headers: this.headers })
  }

  getCentrosAcopios() {
    return this.http.get(this.apiURL + "/CentrosAcopios/todos", { headers: this.headers });
  }

  getRutas() {
    return this.http.get(this.apiURL + "/Rutas/todos", { headers: this.headers });
  }

  getCamiones() {
    return this.http.get(this.apiURL + "/Camiones/todos", { headers: this.headers });
  }

}
