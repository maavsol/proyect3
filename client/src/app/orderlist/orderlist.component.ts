import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../services/order.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  BASE_URL: string = 'http://localhost:3000';
  orderlist: Array<any>;
  oneorder: Object;
  orderid: string;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private orderService: OrderService,
  ) { }

  ngOnInit() {
  }


  // seeMyOrders(){
  //   this.orderService.getOrdertList().subscribe(result => this.orderlist = result )
  // }

  seeOneOrder(){
    this.orderService.getOneOrder(this.orderid).subscribe(result => this.oneorder = result)
  }

}
