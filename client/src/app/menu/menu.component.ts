import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestaurantService} from '../services/restaurant.service';
import {OrderService} from '../services/order.service'
import {Observable} from 'rxjs/Observable';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  product:Object;
  orderId:string;
  restaurantId:string;

  productsOrdered: Array<Object> = []


  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private restaurantService: RestaurantService,
    private orderService: OrderService,
    private auth:AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.restaurantId = params['id']
      this.restaurantService.getRestaurant(this.restaurantId)
      .subscribe(product => {
        this.product = product.products
          })
    })
  }
  addProductToOrder(products, allinfo){
    this.orderService.pushProductToOrder(products);
    this.productsOrdered=this.orderService.productsOrdered
  }

  deleteProduct(products){
    this.orderService.removeProductFromOrder(products);
  }

  placeOrderAndReset(){
    this.orderService.placeOrderAndReset().subscribe(pedido =>{
      this.orderId = pedido._id
      console.log(pedido)
      this.orderService.getOneOrder(this.orderId)
      .subscribe(() => {this.router.navigate(['/order', this.orderId])
      })
    })

  }
  // removeProductFromOrder(productId){
  //   this.orderService.removeProductFromOrder(productId)
  // }
}
