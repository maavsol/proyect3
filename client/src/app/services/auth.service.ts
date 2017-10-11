import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';


@Injectable()
export class AuthService {
  BASE_URL = environment.BASE_URL + '/auth'
  private user:object;
  private userLoginEvent:EventEmitter<any> = new EventEmitter<any>();
  private options = {withCredentials:true};

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

    public getLoginEventEmitter():EventEmitter<any>{
      return this.userLoginEvent;
    }

    public getUser(){
      console.log("esto vale en el servicio mi user")
      console.log(this.user)
      return this.user;
    }

    private emitUserLoginEvent(user){
      this.user = user;
      this.userLoginEvent.emit(user);
      return user;
    }

    private handleError(e) {
      console.log("AUTH ERROR");
      return Observable.throw(e.json().message);
    }

    signup(username,password) {
      console.log("entrooo")
      return this.http.post(`${this.BASE_URL}/signup`, {username,password}, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }

    login(username,password) {
      return this.http.post(`${this.BASE_URL}/login`, {username,password}, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }

    logout() {
      return this.http.get(`${this.BASE_URL}/logout`, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(null))
        .catch(this.handleError);
    }

    isLoggedIn() {
      return this.http.get(`${this.BASE_URL}/loggedin`, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }
}
