import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  constructor(private http: HttpClient) { }

  public getCategories() {
    return this.http.get(`${env.api}/Categorias`);
  }
}
