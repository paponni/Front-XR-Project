import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'mg-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  ticketID : number =1;
  quantity:number = 1;
  listItems : any; 
  totalSum : number = 0;
  zoneValue : number = 1;
  show : boolean = false;
  zoneCoef: number = 1;
   map1 = new Map();
  arr = [];
  ZONES = [
    {   id : 1,
        zone : "1"
      },
    { id : 2,
      zone : "2"
    },
    {   id : 3,
       zone : "3"
      }
    ]
  constructor(private router : Router , private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.viewCart()
    .subscribe((data)=>{
      this.listItems=data['bufcartList'];
      
      this.listItems.forEach(value => {
        this.ticketID=value.ticketID;
        console.log("list item :"+value.ticketID);
        this.map1.set(value.ticketID ,1);
        this.totalSum = this.totalSum + (value.quantite * value.price * this.zoneCoef)
        
      });
      this.cartService.sendTotal(this.totalSum);
      console.log(data['bufcartList']);
    })
  }
  

  changeZone(e,refTicket:number){
    this.ticketID=refTicket;
    this.map1.set(refTicket,e.target.value);
    const iterator1 = this.map1.keys();
    for(const [key , valeur] of this.map1){
      if(key == refTicket) this.map1.set(refTicket,e.target.value)
    }
  
      
    this.zoneCoef = e.target.value;
    console.log("target id :"+refTicket)
    console.log(e.target.value)

  }

  minus(ticket:number,quantite:number,ticketID:number){
    if(quantite != 1){
    quantite=Number(quantite) - 1 ;
    console.log(quantite)
    console.log("ticket id : "+ticketID)
    let prevItem = sessionStorage.getItem(''+ticketID)
    sessionStorage.setItem(''+ticketID,''+(Number(prevItem) -1 ))
    this.cartService.updateCartItem(ticket,quantite)
    .subscribe((data)=>{
      this.reloadComponent();
    })
    }
  }

  plus(ticket:number,quantite:number,ticketID:number){
    // this.quantity++;
    
    quantite = Number(quantite) + 1;
    console.log(quantite)
    console.log("ticket id :"+ticketID)
    let prevItem = sessionStorage.getItem(''+ticketID);
    sessionStorage.setItem(''+ticketID,''+(Number(prevItem) + 1))
    this.cartService.updateCartItem(ticket,quantite)
    .subscribe((data)=>{
      this.reloadComponent()
    })
      
  }

  updateZone(zone:number){
    console.log("the zone will updated to this :"+zone)

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
