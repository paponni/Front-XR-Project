import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {ProductComponent} from "./components/product/product.component";
import {ThankyouComponent} from "./components/thankyou/thankyou.component";
import { ListTiketsComponent } from './components/list-tikets/list-tikets.component';
import { SingleTicketComponent } from './components/single-ticket/single-ticket.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'tickets', component: ListTiketsComponent
  },
  {
    path: 'ticket/:id', component: SingleTicketComponent
  },
 
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'thankyou', component: ThankyouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
