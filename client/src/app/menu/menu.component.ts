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
  nameOfProd:string;
  name: string;
  price: string;
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
  addProductToOrder(products){
    this.orderService.pushProductToOrder(products)
  }

  placeOrderAndReset(){
    this.orderService.placeOrderAndReset().subscribe(pedido =>{
      this.id = pedido._id
    })
    this.orderService.getOneOrder(this.id)
    .subscribe(() => {this.router.navigate(['/order', this.id])
    })
  }
  // removeProductFromOrder(productId){
  //   this.orderService.removeProductFromOrder(productId)
  // }
}
