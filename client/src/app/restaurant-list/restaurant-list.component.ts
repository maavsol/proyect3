import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants;
   constructor(public restaurantService:RestaurantService) { }

   ngOnInit() {
     this.restaurants = this.restaurantService.getList();
   }

}
