import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from "../../../environments/environment";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BrandService {
  private setIdMenuFilter = new BehaviorSubject<any>('')
  public currentIdMenuFilter = this.setIdMenuFilter.asObservable();

  constructor(private http: HttpClient) { }

  public filterCouponsById(data: number): void {
    this.setIdMenuFilter.next(data);
  }

  public getBrandCoupons(idMenu: number | string) {
    return this.http.get(`${env.api}/Marcas?idMenu=${idMenu}`);
  }

}
