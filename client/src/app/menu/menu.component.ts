import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestaurantService} from '../services/restaurant.service';
import {OrderService} from '../services/order.service'
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  BASE_URL: string = 'http://localhost:3000';
  productId:string;
  product:Object;
  id:String;

  productsOrdered: Array<string> = []

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private restaurantService: RestaurantService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.restaurantService.getRestaurant(this.id)
      .subscribe(product => {
        this.product = product.products
          })
    })
  }
  addProductToOrder(productId){
    this.orderService.pushProductToOrder(productId)
  }
  // removeProductFromOrder(productId){
  //   this.orderService.removeProductFromOrder(productId)
  // }
}
