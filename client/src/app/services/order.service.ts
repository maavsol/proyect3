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

  // getOrderShow(id){
  //   return this.http.get(`${this.BASEURL}/order/${id}`)
  //     .map((res) => {
  //     return res.json()
  //   })
  // }

  pushProductToOrder(productId:string){
     this.productsOrdered.push(productId)
     console.log(this.productsOrdered)
  }

  placeOrderAndReset(){
    return this.http.post(`${this.BASEURL}/order`, this.productsOrdered)
    .map((res) => res.json())
  }

}
