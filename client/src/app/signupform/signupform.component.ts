import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
formInfo = {
  username:"",
  password:""
}
  constructor(public auth:AuthService,
    public router: Router,
    public route: ActivatedRoute) { }

  ngOnInit() {
  }

  signup(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      console.log(`Signup with ${username} ${password}`)
      this.auth.signup(username, password)
      .map(user => console.log(user))
      .subscribe(()=>{this.router.navigate(['/home'])});
    } else{
      console.log("You must set a username and a password");
    }
  }

}
