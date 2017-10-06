import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestaurantService} from '../services/restaurant.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  BASE_URL: string = 'http://localhost:3000';

  product:Object;
  id:String;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private restaurantService: RestaurantService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.restaurantService.getRestaurant(this.id)
      .subscribe(product => {
        //this.product = JSON.parse(product.products)
        this.product = product.products
          })
    })
  }
}
