import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material';
import { AuthService } from '../services/auth.service'
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: object

  constructor(public auth: AuthService) {
    this.user = this.auth.getUser()
  }

  ngOnInit() {
    $(document).ready(function() {
      $('.parallax').parallax();
    });
  }

}
