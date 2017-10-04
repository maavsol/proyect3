import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';
import {RestaurantsComponent} from './restaurants/restaurants.component'
import {MenuComponent} from './menu/menu.component';
import {OrderComponent} from './order/order.component';
import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';
import {WaitingComponent} from './waiting/waiting.component';
import {BillComponent} from './bill/bill.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user',  component: UserprofileComponent,canActivate: [ IsLoggedInService ]  },
    { path: 'login',  component: LoginformComponent,  },
    { path: 'signup',  component: SignupformComponent,  },
    { path: 'restaurants',  component: RestaurantsComponent,  },
    { path: 'menu', component: MenuComponent},
    { path: 'order', component: OrderComponent},
    { path: 'waiting', component: WaitingComponent},
    { path: 'bill', component: BillComponent},
    { path: '**', redirectTo: '' }
];
