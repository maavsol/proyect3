import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  BASE_URL: string = 'http://localhost:3000';
  orderlist: Array<any>;
  oneorder: Array<any>
  orderid: string;
  id: string;
  totalsum: number=0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.orderService.getOneOrder(this.id)
        .subscribe(order =>
          this.oneorder = order.products)
    })
  }
  ngOnInit() {
  }

  isCheckOrdered: boolean = false;
  askForCheck(){
    this.isCheckOrdered = !this.isCheckOrdered
    for(let i = 0; i<this.oneorder.length; i ++){
      this.totalsum += this.oneorder[i].price
      console.log(this.totalsum)
    }
  }
}
