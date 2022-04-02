import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ThankyouComponent} from "./components/thankyou/thankyou.component";
import { ListTiketsComponent } from './components/list-tikets/list-tikets.component';
import { SingleTicketComponent } from './components/single-ticket/single-ticket.component';
import { ZoneComponent } from './components/zone/zone.component';
import { CompteComponent } from './components/compte/compte.component';
import { AchatsComponent } from './components/achats/achats.component';
import { LoginActivateGuard } from './guards/login-activate.guard';



const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'achats', component: AchatsComponent,canActivate:[LoginActivateGuard]
  },
  {
    path: 'tickets', component: ListTiketsComponent
  },
  {
    path: 'compte', component: CompteComponent,canActivate:[LoginActivateGuard]
  },
  {
    path: 'ticket/:id', component: SingleTicketComponent
  },
  {
    path: 'ticket/:id/zone', component: ZoneComponent
  },
 
  {
    path: 'register', component: RegisterComponent
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
