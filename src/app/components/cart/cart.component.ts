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
  

  minus(ticketID:number,quantite:number){
    if(quantite != 1){
    quantite=Number(quantite) - 1 ;
    console.log(quantite)
    this.cartService.updateCartItem(ticketID,quantite)
    .subscribe((data)=>{
      this.reloadComponent();
    })
    }
  }

  plus(ticketID:number,quantite:number){
    // this.quantity++;
    
    quantite = Number(quantite) + 1;
    console.log(quantite)
    this.cartService.updateCartItem(ticketID,quantite)
    .subscribe((data)=>{
      this.reloadComponent()
    })
      
  }

  deleteTicket(ticketID:number){
    this.cartService.deleteTicket(ticketID)
    .subscribe((data) => {
      
      
      const deletedTicket = this.listItems.find(u => u.bufcartID == ticketID);
      const items = this.listItems.splice(this.listItems.indexOf(deletedTicket),1);
      items.forEach(value => {
        this.totalSum = this.totalSum -(value.quantite * value.price)
        
      });
    })
    
  }


  reloadComponent(){
    let currentURL = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation='reload';
      this.router.navigate([currentURL]);
  }

}
