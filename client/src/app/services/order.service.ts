import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';

const BASEURL: string = environment.BASEURL + "/auth";

@Injectable()
export class OrderService {

  BASEURL: string = 'http://localhost:3000';

  productsOrdered: Array<string> = [];

  constructor(public http: Http) { }


  getOrdertList() {
    return this.http.get(`${this.BASEURL}/order`)
      .map((res) => {
      return res.json()
      });
  }

  getOneOrder(id) {
      return this.http.get(`${this.BASEURL}/order/${id}`)
        .map((res) => res.json());
  }


  pushProductToOrder(products:string){
     this.productsOrdered.push(products)
     console.log(this.productsOrdered)
  }

  placeOrderAndReset(){
    return this.http.post(`${this.BASEURL}/order`, this.productsOrdered)
    .map((res) => res.json())
  }

}
