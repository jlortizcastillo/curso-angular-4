import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProveedoresService {

  provURL = 'https://comprasapp-4715b.firebaseio.com/proveedores.json';
  proURL = 'https://comprasapp-4715b.firebaseio.com/proveedores';
  proveedores: any;

  constructor(private http: Http) { }

  postProveedor(proveedor: any) {
    const newpro = JSON.stringify(proveedor);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.provURL, newpro, {headers})
                    .map(res => {
                      console.log(res.json());
                      return res.json();
                    });
  }

  getProveedores() {
    return this.http.get(this.provURL)
                    .map(
                      res => res.json()
                    );
  }

  getProveedor(id$: string) {
    const url = `${this.proURL}/${id$}.json`;

    return this.http.get(url)
                    .map(res => res.json());
  }

  putProveedor(proveedor: any, id$: string) {
    const newpro = JSON.stringify(proveedor);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.proURL}/${id$}.json`;

    return this.http.put(url, newpro, { headers })
                    .map( res => {
                      console.log(res.json());

                      return res.json();
                    });
  }

  delProveedor(id$: string) {
    const url = `${this.proURL}/${id$}.json`;

    return this.http.delete(url)
                    .map(res => res.json());
  }

  getProveedoresSearch(busqueda: string) {
    const url = `${this.provURL}?orderBy="nombre"&startAt="${busqueda}"&endAt="${busqueda}\uf8ff"`;

    return this.http.get(url)
                    .map(res => res.json());
  }
}
