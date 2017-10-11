import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class OrderService {
  BASE_URL = environment.BASE_URL

  productsOrdered: Array<Object> = [];


  constructor(public http: Http) { }


  getOrdertList() {
    return this.http.get(`${this.BASE_URL}/order`)
      .map((res) => {
      return res.json()
      });
  }

  getOneOrder(id) {
      return this.http.get(`${this.BASE_URL}/order/${id}`)
        .map((res) => res.json());
  }

  pushProductToOrder(products:Object){
     this.productsOrdered.push(products);
     

  }

  removeProductFromOrder(product: Object){
    this.productsOrdered.splice(this.productsOrdered.indexOf(product), 1);
  }

  placeOrderAndReset(){
    return this.http.post(`${this.BASE_URL}/order`, this.productsOrdered)
    .map((res) => res.json())
  }

}
