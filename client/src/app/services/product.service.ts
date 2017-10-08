import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable }  from 'rxjs/Rx';

import {environment} from '../../environments/environment';

const BASEURL:string = environment.BASEURL + "/auth";


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
