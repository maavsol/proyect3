import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants;
  order;
  user;

  constructor(
    public userService : AuthService,
    public restaurantService: RestaurantService,
    public orderService: OrderService,
    public router: Router,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurants = this.restaurantService.getList();
    this.user = this.userService.getUser()
  }

  goToRestaurant(restaurant) {
    console.log("esto recojo del formulario" )
    console.log(this.user)
    console.log(restaurant)
    const referents = {
      userId:this.user._id,
      restaurantId:restaurant._id
    }
    this.orderService.newOrder(referents)
    .subscribe(() => {this.router.navigate(['/restaurants'])},
  );
  }
}
