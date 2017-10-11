import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable }  from 'rxjs/Rx';

import {environment} from '../../environments/environment';

@Injectable()
export class ProductService {
BASE_URL = environment.BASE_URL

    constructor(private http: Http) {}

    getList() {
      return this.http.get(`${this.BASE_URL}/product`)
        .map((res) => res.json());
    }

    getProducts(id) {
      return this.http.get(`${this.BASE_URL}/product/${id}`)
        .map((res) => res.json());
    }

}
