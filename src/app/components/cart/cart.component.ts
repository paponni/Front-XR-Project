import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'mg-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantity:number = 1;
  listItems : any; 
  totalSum : number = 0;
  zoneValue : number = 1;
  show : boolean = false;
  ZONES = [
    {   id : 11,
        zone : "1"
      },
    { id : 12,
      zone : "2"
    },
    {   id : 13,
       zone : "3"
      }
    ]
  constructor(private router : Router , private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.viewCart()
    .subscribe((data)=>{
      this.listItems=data['bufcartList'];
      this.listItems.forEach(value => {
        this.totalSum = this.totalSum + (value.quantite * value.price)
        
      });
      console.log(data['bufcartList']);
    })
  }
  

  changeZone(e){
  if(e.target.value == 2){
    this.show = true;
  }

  }

  minus(ticket:number,quantite:number,ticketID:number,zone:any){
    if(quantite != 1){
    quantite=Number(quantite) - 1 ;
    console.log(quantite)
    console.log("ticket id : "+ticketID)
    let prevItem = sessionStorage.getItem(''+ticketID)
    sessionStorage.setItem(''+ticketID,''+(Number(prevItem) -1 ))
    this.cartService.updateCartItem(ticket,quantite,zone)
    .subscribe((data)=>{
      this.reloadComponent();
    })
    }
  }

  plus(ticket:number,quantite:number,ticketID:number,zone:any){
    // this.quantity++;
    
    quantite = Number(quantite) + 1;
    console.log(quantite)
    console.log("ticket id :"+ticketID)
    let prevItem = sessionStorage.getItem(''+ticketID);
    sessionStorage.setItem(''+ticketID,''+(Number(prevItem) + 1))
    this.cartService.updateCartItem(ticket,quantite,zone)
    .subscribe((data)=>{
      this.reloadComponent()
    })
      
  }

  deleteTicket(ticket:number,ticketID:number){
    this.cartService.deleteTicket(ticket,ticketID)
    .subscribe((data) => {
      const deletedTicket = this.listItems.find(u => u.bufcartID == ticket);
      const items = this.listItems.splice(this.listItems.indexOf(deletedTicket),1);
      items.forEach(value => {
        this.totalSum = this.totalSum -(value.quantite * value.price)
        
      });
      this.reloadComponent();
    })
    
  }


  reloadComponent(){
    let currentURL = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation='reload';
      this.router.navigate([currentURL]);
  }

}
