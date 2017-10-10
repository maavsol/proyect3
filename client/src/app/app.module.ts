import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';

import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SignupformComponent } from './signupform/signupform.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { MenuComponent } from './menu/menu.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { NavComponent } from './nav/nav.component';

import { AuthService } from './services/auth.service';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { RestaurantService } from './services/restaurant.service';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';

import {routes} from './routes';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    RestaurantListComponent,
    MenuComponent,
    OrderlistComponent,
    NavComponent,
    FilterPipe,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterializeModule
  ],
  providers: [AuthService,
              IsLoggedInService,
              RestaurantService,
              ProductService,
              OrderService],

  bootstrap: [AppComponent]
})
export class AppModule { }
