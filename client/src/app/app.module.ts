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

import { AuthService } from './services/auth.service';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { RestaurantService } from './services/restaurant.service'
import { ProductService } from './services/product.service'
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { MenuComponent } from './menu/menu.component';

import {routes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    NavComponent,
    RestaurantListComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService,
              IsLoggedInService,
              RestaurantService,
              ProductService],

  bootstrap: [AppComponent]
})
export class AppModule { }
