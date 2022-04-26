import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'mg-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @ViewChild('pRef') pRef: ElementRef;
    Tickets!:any;
   TICKETS = [
    {
      id : 1,
      nomMatch : "Real Madrid vs Valencia FC",
      dateMatch : "Sunday 19 mai 2022",
      heureMatch : "15h00",
      lieuMatch : "Estadio el madrigol",
      nbrTickets : "360",
      photo : "../../../../assets/img/ticket1.png",
      prix : 500,
      image : 'christian-pulisic-chelsea.jpg'
    },
    {
      id : 2,
      nomMatch : "Real Madrid vs Valencia FC",
      dateMatch : "Sunday 19 mai 2022",
      heureMatch : "15h00",
      lieuMatch : "Estadio el madrigol",
      nbrTickets : "360",
      photo : "../../../../assets/img/ticket1.png",
      prix : 500,
      image : 'barca.jpg'

    },
    {
      id : 3,
      nomMatch : "Real Madrid vs Valencia FC",
      dateMatch : "Sunday 19 mai 2022",
      heureMatch : "15h00",
      lieuMatch : "Estadio el madrigol",
      nbrTickets : "360",
      photo : "../../../../assets/img/ticket1.png",
      prix : 500,
      image : 'el-clasico.jpeg'

    }
  ];

  constructor(private ticketService : TicketService,private cartService : CartService,private toastrService :ToastrService) { }

  ngOnInit(): void {
  console.log(this.TICKETS[0].image)
    this.ticketService.findAll()
    .subscribe(
      (data)=>{
        console.log(data);
        this.Tickets=data;
      },
      (error) => console.log(error)
    )
  }


  addtoCart(t:any){
  console.log(t);
  this.cartService.addtoCart(t);
  this.infoAddToCart();
}


infoAddToCart(){

  this.toastrService.info("item added to cart","",{
    positionClass : "toast-bottom-right",
    closeButton : true,
    
  });
}

errorAddToCart(){

  this.toastrService.error("error adding item to cart","error",{
    positionClass : 'toast-bottom-right',
  });
}

}
