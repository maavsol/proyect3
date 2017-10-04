import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SignupformComponent } from './signupform/signupform.component';
import { NavComponent } from './shared/nav/nav.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { WaitingComponent } from './waiting/waiting.component';
import { BillComponent } from './bill/bill.component';

import { AuthService } from './services/auth.service';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { RestaurantService } from './services/restaurant.service'

import {routes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    NavComponent,
    RestaurantsComponent,
    MenuComponent,
    OrderComponent,
    WaitingComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService, RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
