import { Component, OnInit } from '@angular/core'
import { RestaurantService } from '../services/restaurant.service'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants:any
  constructor(public rs: RestaurantService) { }

  ngOnInit() {
    this.restaurants = this.rs.getRestaurants()
  }

}
