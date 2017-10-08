import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {environment} from '../../environments/environment';

const BASEURL:string = environment.BASEURL + "/auth";

@Injectable()
export class OrderService {

  BASEURL: string = 'http://localhost:3000';
  constructor(public http: Http) { }

newOrder(ids) {
  console.log("esto es lo que paso al servicio " + ids)
     return this.http.post(`${this.BASEURL}/order`, ids)
         .map((res) => res.json());
    }
}
