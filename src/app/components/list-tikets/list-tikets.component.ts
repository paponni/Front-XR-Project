import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'mg-list-tikets',
  templateUrl: './list-tikets.component.html',
  styleUrls: ['./list-tikets.component.scss']
})
export class ListTiketsComponent implements OnInit {

  Tickets :any ;

  constructor(private ticketService : TicketService,private router : Router,private cartService : CartService) { }

  ngOnInit(): void {

    this.ticketService.findAll()
    .subscribe((data)=>{
      this.Tickets = data;
    },
    (error)=>{
      console.log(error);
    })
  }


  addToCart(t:any){
    this.cartService.addtoCart(t);
  }

}
