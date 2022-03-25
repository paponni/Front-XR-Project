import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'mg-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
    Tickets!:any;
   TICKETS = [
    {
      nomMatch : "Real Madrid vs Valencia FC",
      dateMatch : "Sunday 19 mai 2022",
      heureMatch : "15h00",
      lieuMatch : "Estadio el madrigol",
      nbrTickets : "360",
      photo : "../../../../assets/img/ticket1.png",
      prix : 500
    },
    {
      nomMatch : "Real Madrid vs Valencia FC",
      dateMatch : "Sunday 19 mai 2022",
      heureMatch : "15h00",
      lieuMatch : "Estadio el madrigol",
      nbrTickets : "360",
      photo : "../../../../assets/img/ticket1.png",
      prix : 500
    },
    {
      nomMatch : "Real Madrid vs Valencia FC",
      dateMatch : "Sunday 19 mai 2022",
      heureMatch : "15h00",
      lieuMatch : "Estadio el madrigol",
      nbrTickets : "360",
      photo : "../../../../assets/img/ticket1.png",
      prix : 500
    }
  ];

  constructor(private ticketService : TicketService) { }

  ngOnInit(): void {
    this.ticketService.findAll()
    .subscribe(
      (data)=>{
        console.log(data);
        this.Tickets=data;
      },
      (error) => console.log(error)
    )
  }

}
