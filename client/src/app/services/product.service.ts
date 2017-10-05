import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

  BASEURL: string = 'http://localhost:3000';
    constructor(private http: Http) {}

    getList() {
      return this.http.get(`${this.BASEURL}/product`)
        .map((res) => res.json());
    }

    getProducts(id) {
      return this.http.get(`${this.BASEURL}/product/${id}`)
        .map((res) => res.json());
    }

}
