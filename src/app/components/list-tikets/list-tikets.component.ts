import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mg-list-tikets',
  templateUrl: './list-tikets.component.html',
  styleUrls: ['./list-tikets.component.scss']
})
export class ListTiketsComponent implements OnInit {
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

    },
    {
      id : 4,
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
      id : 5,
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
      id  :6,
      nomMatch : "Real Madrid vs Valencia FC",
      dateMatch : "Sunday 19 mai 2022",
      heureMatch : "15h00",
      lieuMatch : "Estadio el madrigol",
      nbrTickets : "360",
      photo : "../../../../assets/img/ticket1.png",
      prix : 500,
      image : 'christian-pulisic-chelsea.jpg'

      
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}