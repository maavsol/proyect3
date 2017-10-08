import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {environment} from '../../environments/environment';
import { Observable }  from 'rxjs/Rx';

const BASEURL:string = environment.BASEURL + "/auth";



@Injectable()
export class RestaurantService {

  BASEURL: string = 'http://localhost:3000';
  constructor(public http: Http) { }

  getList() {
       return this.http.get(`${this.BASEURL}/restaurant`)
         .map((res) => res.json());
    }
    getRestaurant(id) {
        return this.http.get(`${this.BASEURL}/restaurant/${id}`)
          .map((res) => res.json());
      }
}
