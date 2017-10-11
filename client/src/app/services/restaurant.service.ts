import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {environment} from '../../environments/environment';
import { Observable }  from 'rxjs/Rx';

@Injectable()
export class RestaurantService {

  BASE_URL = environment.BASE_URL
  constructor(public http: Http) { }

  getList() {
       return this.http.get(`${this.BASE_URL}/restaurant`)
         .map((res) => res.json());
    }
    getRestaurant(id) {
        return this.http.get(`${this.BASE_URL}/restaurant/${id}`)
          .map((res) => res.json());
      }
}
