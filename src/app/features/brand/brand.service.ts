import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class BrandService {
  constructor(private http: HttpClient) { }

  public getBrandCoupons(idMenu: string) {
    return this.http.get(`${env.api}/Marcas?idMenu=${idMenu}`);
  }

}
