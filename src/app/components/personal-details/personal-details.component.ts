import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'mg-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  public id:any;
  loginStatus$ : boolean = false ;
  ticket : any;
  ZONES = [
    {
      id : 1,
      prix : 1
    },
    {
      id : 2,
      prix:2
    },
    {
      id : 3,
      prix:3
    },
    {
      id : 4,
      prix:4
    },

  ];
  constructor(private route:ActivatedRoute,private ticketService : TicketService) { }

  ngOnInit(): void {

    if(localStorage.getItem('jwt') != null){
      this.loginStatus$ = true;
    }
    else{
      this.loginStatus$ = false;
    }
    console.log(this.loginStatus$)
    this.id=this.route.snapshot.paramMap.get('id');
    this.ticketService.getTicket(this.id)
    .subscribe((data)=>{
      this.ticket = data;
      console.log(this.ticket)

    },
    (error)=>{
      console.log(error);
    })
  }

}