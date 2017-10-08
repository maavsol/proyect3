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
  // order:string = 'soy una lista'
  BASE_URL: string = 'http://localhost:3000';

  order:Object;
  id: String
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(this.order)
      this.id = params['id']
      this.orderService.getOrder()
      .subscribe(order => {
        this.order = order
      })
    })
  }

}
