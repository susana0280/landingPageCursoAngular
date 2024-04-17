import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../models/products.models';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService implements OnInit {

  private baseURL="https://fakestoreapi.com/products"

 private _httpClient=inject(HttpClient)

  constructor() { 

  

  }
  ngOnInit(): void {
  


  }

  getAllProductos():Observable<Iproducts[]>{

    return this._httpClient.get<Iproducts[]>(`${this.baseURL}`)
  }

  getProduct(id:number):Observable<Iproducts>{
    return this._httpClient.get<Iproducts>(`${this.baseURL}/${id}`)

  }
  
}
